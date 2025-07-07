'use client'
import Footer from '@/components/features/footer'
import SecondCallToAction from '@/components/ui/secondCallToAction'
import Header from '@/components/features/header'
import CallToAction from '@/components/ui/callToAction'

export default function Home() {
  return (
    <>
      <main className='bg-whiteClem min-h-screen flex flex-col'>
        <Header />

        <div className='flex flex-col items-center justify-center max-w-md mx-auto gap-10 pt-12 px-4 sm:pt-20 sm:px-0'>
          <SecondCallToAction href={"/nutrition"} name={"NUTRITION"} />
          <SecondCallToAction href={"/training"} name={"TRAINING"} />
          <SecondCallToAction href={"/suivis"} name={"SUIVIS COMPLET"} />
        </div>

        <div className="flex flex-col items-center justify-center max-w-md mx-auto pt-12 px-4 sm:px-0">
          <CallToAction href={"/form"} name={"me contacter"} />
        </div>

        <div className='py-12'>
          <Footer />
        </div>
      </main>
    </>
  )
}
