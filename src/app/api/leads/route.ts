import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const { name, email, phone, source } = body;

    // Validate required fields
    if (!name || (!email && !phone)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
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
