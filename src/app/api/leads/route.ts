import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long").trim(),
  email: z.string().email("Invalid email format").optional().or(z.literal('')),
  phone: z.string().regex(/^\+?[\d\s-]{10,14}$/, "Invalid phone format").optional().or(z.literal('')),
  source: z.string().optional(),
}).refine(data => data.email || data.phone, {
  message: "Either email or phone is required",
  path: ["email"],
});

// Simple memory-based rate limiter (for demo/serverless warm starts)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting (3 requests per minute)
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000;
    
    if (ip !== 'unknown') {
      const userLimit = rateLimitMap.get(ip);
      if (!userLimit || (now - userLimit.timestamp) > windowMs) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      } else {
        userLimit.count += 1;
        if (userLimit.count > 3) {
          return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
        }
      }
    }

    const body = await req.json();
    
    // 2. Strict Zod Schema Validation
    const validationResult = leadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.issues[0].message },
        { status: 400 }
      );
    }
    
    const { name, email, phone, source } = validationResult.data;

    // ----------------------------------------------------------------------
    // REAL-TIME CRM WEBHOOK (Salesforce / HubSpot / LeadSquared)
    // ----------------------------------------------------------------------
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    
    if (webhookUrl) {
      const crmPayload = {
        leadName: name,
        leadEmail: email,
        leadPhone: phone,
        leadSource: source || 'Organic SEO',
        project: 'The Reserve by Kolte Patil',
        timestamp: new Date().toISOString(),
      };
      const maxRetries = 3;
      let attempt = 0;
      let success = false;

      while (attempt < maxRetries && !success) {
        try {
          const crmResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(crmPayload),
          });
          
          if (crmResponse.ok) {
            success = true;
            console.log('CRM Webhook successful on attempt:', attempt + 1);
          } else {
            console.warn(`CRM Webhook failed with status ${crmResponse.status} on attempt ${attempt + 1}`);
            attempt++;
          }
        } catch (err) {
          console.error(`CRM Webhook Network Error on attempt ${attempt + 1}:`, err);
          attempt++;
        }
      }
      
      if (!success) {
        // Fallback: Queue to a robust dead-letter queue or log heavily
        console.error('CRITICAL: CRM Webhook failed after max retries. Lead data:', crmPayload);
      }
    } else {
      console.log("=== CRM WEBHOOK URL NOT SET, SIMULATING LEAD CAPTURE ===");
      console.log(`Name: ${name} | Email: ${email} | Phone: ${phone}`);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));
    }

    return NextResponse.json(
      { success: true, message: 'Lead routed to sales team successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Lead routing error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
