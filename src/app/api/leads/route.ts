import { NextRequest, NextResponse } from 'next/server';

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
    const { name, email, phone, source } = body;

    // 2. Strict Input Sanitization
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{10,14}$/;

    if (!name || name.trim().length < 2 || name.trim().length > 50) {
      return NextResponse.json({ error: 'Invalid Name' }, { status: 400 });
    }
    
    if (email && !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid Email Format' }, { status: 400 });
    }

    if (phone && !phoneRegex.test(phone)) {
      return NextResponse.json({ error: 'Invalid Phone Format' }, { status: 400 });
    }

    if (!email && !phone) {
      return NextResponse.json({ error: 'Email or Phone is required' }, { status: 400 });
    }

    // ----------------------------------------------------------------------
    // CRM WEBHOOK SIMULATION (Salesforce / HubSpot / LeadSquared)
    // ----------------------------------------------------------------------
    // In a production environment, you would POST this payload to your CRM.
    const crmPayload = {
      leadName: name,
      leadEmail: email,
      leadPhone: phone,
      leadSource: source || 'Organic SEO',
      project: 'The Reserve by Kolte Patil',
      timestamp: new Date().toISOString(),
    };

    console.log("=== NEW HIGH INTENT LEAD CAPTURED ===");
    console.log(JSON.stringify(crmPayload, null, 2));
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

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
