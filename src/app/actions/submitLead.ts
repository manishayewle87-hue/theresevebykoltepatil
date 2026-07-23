"use server";

export async function submitLead(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  
  if (!name || !email) {
    return { success: false, message: "Name and email are required." };
  }

  // Simulate network latency for a high-end luxury feel
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const crmUrl = process.env.CRM_WEBHOOK_URL;
  const crmKey = process.env.CRM_API_KEY;

  if (crmUrl) {
    try {
      await fetch(crmUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(crmKey && { "Authorization": `Bearer ${crmKey}` })
        },
        body: JSON.stringify({
          leadName: name,
          leadEmail: email,
          leadSource: formData.get("interest") || "Organic SEO",
          project: "The Reserve by Kolte Patil",
          timestamp: new Date().toISOString()
        })
      });
      console.log(`[CRM Webhook] Successfully routed lead: ${name}`);
    } catch (e) {
      console.error("[CRM Webhook Error]", e);
    }
  } else {
    // Local fallback
    console.log(`[LEAD CAPTURED] Name: ${name}, Email: ${email}`);
  }

  return { success: true, message: "Your inquiry has been received. Our concierge will contact you shortly." };
}
