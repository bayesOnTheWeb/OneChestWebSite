export default function Input( {name , label} ){

    const formStyle = "gap-20 p-5"

    return(
        <>
        <label className="formStyle" htmlFor= {name} >{label}</label>
        <input type="text" />
        </>
    );
}