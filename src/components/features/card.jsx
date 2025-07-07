import CallToAction from '@/components/ui/callToAction.jsx'

export default function Card({ pic, title, content1, content2, content3, content4, price }) {
  const textStyle = "flex justify-center text-gray-800";
  return (
    <div
      className="
        p-6
        flex flex-col
        w-full            /* pleine largeur mobile */
        max-w-md          /* max largeur 28rem (448px) sur plus grand écran */
        mx-auto           /* centrer horizontal */
        gap-4
        bg-white
        rounded-lg
        shadow-lg
      "
    >
      <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
      <img src={pic} alt="photo d'illustration" className="w-auto h-auto object-contain mb-4" />
      <div className='flex flex-col justify-center gap-6'>
        <p className={textStyle}>{content1}</p>
        <p className={textStyle}>{content2}</p>
        <p className={textStyle}>{content3}</p>
        <p className={textStyle}>{content4}</p>
      </div>
      <p className="text-center text-lg font-bold mt-4 mb-6">{price}</p>

      <CallToAction href={"/form"} name={"me contacter"} />
    </div>
  );
}
