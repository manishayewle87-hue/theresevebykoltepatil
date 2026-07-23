"use server";

export async function submitLead(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  
  if (!name || !email) {
    return { success: false, message: "Name and email are required." };
  }

  // Simulate network latency for a high-end luxury feel
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real application, you would insert this into a CRM (e.g. Salesforce, HubSpot)
  console.log(`[LEAD CAPTURED] Name: ${name}, Email: ${email}`);

  return { success: true, message: "Your inquiry has been received. Our concierge will contact you shortly." };
}
