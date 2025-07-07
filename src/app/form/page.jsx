"use client"

import { useState } from 'react'
import Header from '@/components/features/header'
import Footer from '@/components/features/footer'

export default function ContactPage() {
  const inputStyle = "w-full border-0 border-b-2 border-redClem bg-transparent focus:outline-none text-blackClem placeholder-gray-600 py-1"
  const sectionTitle = "text-sm font-semibold uppercase tracking-wider mt-6 mb-2"
  const formWrapper = "flex flex-col items-center justify-start w-full max-w-md mx-auto px-4 py-6 gap-4"
  const btnStyle = "bg-redClem text-whiteClem rounded-full px-6 py-2 text-sm hover:bg-red-700 transition-colors duration-200"

  const [lastname, setLastname] = useState('')
  const [firstname, setFirstname] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [goal, setGoal] = useState('')
  const [experience, setExperience] = useState('')
  const [sessions, setSessions] = useState('')
  const [routine, setRoutine] = useState('')
  const [injuries, setInjuries] = useState('')
  const [allergies, setAllergies] = useState('')
  const [mealsPerDay, setMealsPerDay] = useState('')
  const [snacking, setSnacking] = useState('')
  const [preferences, setPreferences] = useState('')
  const [formule , setFormule] = useState('')

  const [responseMessage, setResponseMessage] = useState('')

  const handleSubmit = async (e) => {
  e.preventDefault()

  const data = {
    lastname,
    firstname,
    email,
    age,
    gender,
    goal,
    experience,
    sessions,
    routine,
    injuries,
    allergies,
    mealsPerDay,
    snacking,
    preferences,
    formule
  }

  try {
    const response = await fetch('/api/sendMail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setResponseMessage('Message envoyé ✅')
      // Optionnel : reset form ici
    } else {
      setResponseMessage('Erreur lors de l’envoi ❌')
    }
  } catch (error) {
    setResponseMessage('Erreur réseau ❌')
    console.error(error)
  }
}

  return (
    <>
      <Header />
      <main className="min-h-screen w-full">
        <h1 className="text-center font-semibold text-xl pt-6 mb-4">FORMULAIRE DE CONTACT</h1>

        <form className={formWrapper} onSubmit={handleSubmit}>
          {/* SECTION 1 : Infos perso */}
          <h2 className={sectionTitle}>INFORMATIONS PERSONNELLES (OBLIGATOIRE)</h2>
          <input className={inputStyle} name="lastname" placeholder="NOM" required value={lastname} onChange={e => setLastname(e.target.value)} />
          <input className={inputStyle} name="firstname" placeholder="PRENOM" required value={firstname} onChange={e => setFirstname(e.target.value)} />
          <input className={inputStyle} name="email" type="email" placeholder="ADRESSE MAIL" required value={email} onChange={e => setEmail(e.target.value)} />
          <input className={inputStyle} name="age" type="number" placeholder="AGE" value={age} onChange={e => setAge(e.target.value)} />
          <input className={inputStyle} name="gender" placeholder="GENRE" value={gender} onChange={e => setGender(e.target.value)} />

          {/* SECTION 2 : Objectifs Sportifs */}
          <h2 className={sectionTitle}>OBJECTIFS SPORTIFS</h2>
          <input className={inputStyle} name="formule" placeholder="FORMULE SOUHAITÉE ?" value={formule} onChange={e => setFormule(e.target.value)} />
          <input className={inputStyle} name="goal" placeholder="OBJECTIF PRINCIPAL ?" value={goal} onChange={e => setGoal(e.target.value)} />
          <input className={inputStyle} name="experience" placeholder="EXPÉRIENCE SPORTIVE ?" value={experience} onChange={e => setExperience(e.target.value)} />
          <input className={inputStyle} name="sessions" placeholder="COMBIEN DE SÉANCES PAR SEMAINES ?" value={sessions} onChange={e => setSessions(e.target.value)} />
          <input className={inputStyle} name="routine" placeholder="ROUTINE HEBDOMADAIRE SOUHAITÉE ?" value={routine} onChange={e => setRoutine(e.target.value)} />
          <input className={inputStyle} name="injuries" placeholder="BLESSURES / POINTS BLOQUANTS À SIGNALER ?" value={injuries} onChange={e => setInjuries(e.target.value)} />

          {/* SECTION 3 : Nutrition */}
          <h2 className={sectionTitle}>NUTRITION</h2>
          <input className={inputStyle} name="allergies" placeholder="ALLERGIES / INTOLÉRANCES ?" value={allergies} onChange={e => setAllergies(e.target.value)} />
          <input className={inputStyle} name="mealsPerDay" placeholder="COMBIEN DE REPAS PAR JOURS ?" value={mealsPerDay} onChange={e => setMealsPerDay(e.target.value)} />
          <input className={inputStyle} name="snacking" placeholder="GRIGNOTAGE ?" value={snacking} onChange={e => setSnacking(e.target.value)} />
          <input className={inputStyle} name="preferences" placeholder="PRÉFÉRENCES ALIMENTAIRES ?" value={preferences} onChange={e => setPreferences(e.target.value)} />

          <button type="submit" className={btnStyle}>valider</button>
        </form>

        {responseMessage && (
          <p className="text-center mt-4 text-green-600 font-semibold">{responseMessage}</p>
        )}
      </main>
      <Footer />
    </>
  )
}
