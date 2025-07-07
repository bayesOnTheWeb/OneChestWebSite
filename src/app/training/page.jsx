import Header from '@/components/features/header'
import Card from '../../components/features/card'
import Footer from '@/components/features/footer'
import CallToAction from '@/components/ui/callToAction'

export default function Page(){
    return(
        <>
        <Header />
        <Card 
        title={"TRAINING"}
        pic={"/img/training.svg"}
        content1={"Programme personnalisé + bilans hebdomadaires pour tracker ta progression."}
        content2={"Évaluation initiale complète pour cerner ton profil, ton quotidien, tes forces et tes axes d’amélioration."}
        content3={"Analyse technique vidéo : envoies de tes exercices et corrections détaillées si nécessaire via mon WhatsApp."}
        content4={"Adapté à la maison ou en salle, selon ton matériel."}
        price={"75€ HT."}
        />
        <Footer />
        </>
    );
}