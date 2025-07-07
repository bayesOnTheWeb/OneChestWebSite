import Input from '@/components/ui/input';
import Header from '@/components/features/header';
import Footer from '@/components/features/footer';
import Card from "@/components/features/card.jsx"

export default function Page(){
    return(
        <>
        <Header />
        <Card 
        title={"SUIVIS COMPLET"}
        pic={"/img/suivis.svg"}
        content1={"Programme sur-mesure combinant entraînement et nutrition intégrée."}
        content2={"Suivi personnalisé et évolutif : ajustements en continu pour rester efficace et motivé."}
        content3={"Bilan hebdomadaire de performance avec indicateurs clairs pour suivre tes résultats."}
        content4={"Accès direct à mon WhatsApp pour poser tes questions, adapter en temps réel si besoin."}
        price={"99€ HT."}
        />
        <Footer />
        </>
    );
}   