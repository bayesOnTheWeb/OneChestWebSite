import Header from '@/components/features/header'
import Card from '../../components/features/card'
import Footer from '@/components/features/footer'

export default function Page(){


    return(
        <>
        <Header />
        <div className='flex justify-center'>
        <Card 
        title={"NUTRITION"}
        pic={"/img/nutrition.svg"}
        content1={"Élaboration d’un plan alimentaire sur-mesure adapté à ton mode de vie, tes objectifs et tes préférences"}
        content2={"Ajustements progressifs et réactifs selon tes résultats et ton ressenti."}
        content3={"Suivi hebdomadaire avec bilans, conseils et corrections si nécessaire."}
        content4={"Échange direct pour répondre à tes questions et t’aider à garder le cap."}
        price={"75€ HT."}
         />
        </div>
      
        </>
);
}