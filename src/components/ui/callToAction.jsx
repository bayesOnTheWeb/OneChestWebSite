import Link from "next/link";

export default function CallToAction({ name , href }) {

  if(href){
    return(
        <Link href={href} className=" bg-redClem 
        text-whiteClem 
        rounded-full 
        px-4 py-2
        text-sm sm:text-base
        min-w-[100px] sm:min-w-[150px]
        hover:bg-red-700
        transition-colors duration-200
        flex justify-center
        ">
           Me contacter
        </Link>
    );
  }


  return (
    <button
      type="button"
      className="
        bg-redClem 
        text-whiteClem 
        rounded-full 
        px-4 py-2
        text-sm sm:text-base
        min-w-[100px] sm:min-w-[150px]
        hover:bg-red-700
        transition-colors duration-200
      "
    >
      {name}
    </button>
  );
}
