import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const data = await req.json()

    // Configure ton transporteur SMTP (ici Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // ton email Gmail
        pass: process.env.SMTP_PASS, // mot de passe d'application Gmail
      },
    })

    // Options du mail à envoyer
    const mailOptions = {
      from: `"Formulaire Contact" <${process.env.SMTP_USER}>`,  // expéditeur (ton compte)
      to: process.env.CONTACT_EMAIL,  // destinataire (ton mail ou variable)
      subject: 'Nouveau message depuis le formulaire',
      replyTo: data.email,  // pour répondre directement à l'utilisateur
      text: `
Nom : ${data.lastname} ${data.firstname}
Email : ${data.email}
Âge : ${data.age}
Genre : ${data.gender}

Objectifs sportifs :
- Objectif principal : ${data.goal}
- Expérience : ${data.experience}
- Séances par semaine : ${data.sessions}
- Routine hebdomadaire : ${data.routine}
- Blessures / points bloquants : ${data.injuries}

Nutrition :
- Allergies / intolérances : ${data.allergies}
- Repas par jour : ${data.mealsPerDay}
- Grignotage : ${data.snacking}
- Préférences alimentaires : ${data.preferences}
      `,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: 'Email envoyé avec succès' }), { status: 200 })
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500 })
  }
}
