import Link from "next/link";

export default function SecondCallToAction({name , href}){

    const style = "text-blackClem p-0.5 border-b-2 border-b-redClem"
    if(href)
        return(
    <Link href={href} className={style} >{name}</Link>
        );

    return(
        <button className={style}> {name}</button>
    );
}