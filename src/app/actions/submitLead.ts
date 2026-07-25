"use server";

export async function submitLead(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  
  if (!name || (!email && !phone)) {
    return { success: false, message: "Name and either email or phone are required." };
  }

  // Simulate network latency for a high-end luxury feel
  await new Promise((resolve) => setTimeout(resolve, 1500));

  try {
    await fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: "New Lead: The Reserve by Kolte Patil",
        Name: name,
        Phone: phone,
        Email: email,
        Configuration_Interest: formData.get("interest") || "Organic SEO",
        Timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      })
    });
    console.log(`[Email Sent] Lead sent to propsmartrealty@gmail.com: ${name}`);
  } catch (e) {
    console.error("[Email Sending Error]", e);
    return { success: false, message: "Failed to send inquiry. Please try again." };
  }

  return { success: true, message: "Your inquiry has been received. Our concierge will contact you shortly." };
}
