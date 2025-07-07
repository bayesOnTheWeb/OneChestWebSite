import nodemailer from 'nodemailer'
import { z, ZodError } from 'zod'

// Schéma zod pour valider et sécuriser la forme des données
const formSchema = z.object({
  firstname: z.string().min(1).max(50),
  lastname: z.string().min(1).max(50),
  email: z.string().email().refine(val => !/[\n\r]/.test(val), {
    message: "Email invalide (caractères interdits)",
  }),
  age: z
    .union([z.string().regex(/^\d+$/), z.number().int()])
    .optional()
    .transform(val => (typeof val === 'string' ? Number(val) : val)),
  gender: z.string().optional(),

  goal: z.string().optional(),
  experience: z.string().optional(),
  sessions: z.string().optional(),
  routine: z.string().optional(),
  injuries: z.string().optional(),

  allergies: z.string().optional(),
  mealsPerDay: z.string().optional(),
  snacking: z.string().optional(),
  preferences: z.string().optional(),
})

// Nettoyage minimal des chaînes pour éviter injection dans email texte
function sanitizeText(text) {
  return text.replace(/[\r\n]+/g, ' ').trim()
}

export async function POST(req) {
  try {
    const body = await req.json()
    const data = formSchema.parse(body)

    // Nettoyage minimal pour chaque champ texte
    const safeGoal = sanitizeText(data.goal || '')
    const safeExperience = sanitizeText(data.experience || '')
    const safeSessions = sanitizeText(data.sessions || '')
    const safeRoutine = sanitizeText(data.routine || '')
    const safeInjuries = sanitizeText(data.injuries || '')
    const safeAllergies = sanitizeText(data.allergies || '')
    const safeMealsPerDay = sanitizeText(data.mealsPerDay || '')
    const safeSnacking = sanitizeText(data.snacking || '')
    const safePreferences = sanitizeText(data.preferences || '')

    const textContent = `
Nom : ${sanitizeText(data.lastname)} ${sanitizeText(data.firstname)}
Email : ${sanitizeText(data.email)}
Âge : ${data.age ?? 'Non renseigné'}
Genre : ${sanitizeText(data.gender ?? 'Non renseigné')}

Objectifs sportifs :
- Objectif principal : ${safeGoal}
- Expérience : ${safeExperience}
- Séances par semaine : ${safeSessions}
- Routine hebdomadaire : ${safeRoutine}
- Blessures / points bloquants : ${safeInjuries}

Nutrition :
- Allergies / intolérances : ${safeAllergies}
- Repas par jour : ${safeMealsPerDay}
- Grignotage : ${safeSnacking}
- Préférences alimentaires : ${safePreferences}
`

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_EMAIL) {
      throw new Error('Configuration SMTP manquante dans les variables d’environnement')
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"Formulaire Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'Nouveau message depuis le formulaire',
      replyTo: data.email,
      text: textContent,
    }

    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ message: 'Email envoyé avec succès' }), { status: 200 })
  } catch (error) {
    if (error instanceof ZodError) {
      return new Response(JSON.stringify({ error: error.errors }), { status: 400 })
    }
    console.error('Erreur envoi email:', error)
    return new Response(JSON.stringify({ error: 'Erreur interne serveur' }), { status: 500 })
  }
}
