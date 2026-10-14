import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Les champs nom, email et message sont obligatoires." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Veuillez fournir une adresse e-mail valide." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@patrickkitiaka.com";

    if (resendApiKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Patrick Kitiaka <noreply@patrickkitiaka.com>",
            to: [receiverEmail],
            reply_to: email,
            subject: `[Contact Portfolio] ${subject || "Nouveau message de " + name}`,
            html: `
              <h2>Nouveau message reçu depuis le site portfolio</h2>
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Sujet :</strong> ${subject || "Non précisé"}</p>
              <hr />
              <p><strong>Message :</strong></p>
              <p>${message.replace(/\n/g, "<br />")}</p>
            `,
          }),
        });

        if (!response.ok) {
          const errData = await response.json();
          console.warn("Resend notification issue:", errData);
        }
      } catch (err) {
        console.warn("Could not dispatch via Resend, falling back:", err);
      }
    } else {
      console.log(`[Contact Form Received] Name: ${name}, Email: ${email}, Subject: ${subject}`);
    }

    return NextResponse.json({
      success: true,
      message: "Votre message a bien été envoyé à Patrick Kitiaka.",
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Erreur lors du traitement de votre demande." },
      { status: 500 }
    );
  }
}
