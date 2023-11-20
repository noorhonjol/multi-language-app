/* eslint-disable react/prop-types */

const Card=({type,description,icon,clr})=>{
    const dynamicClass = `bg-${clr}`;
    return(
        <section className={`${dynamicClass} px-10 h-1/2`}>
            <img className="mt-10" src={icon}/>
            <h1 className=" text-4xl mt-12">{type}</h1>
            <p className="mt-12 text-md">{description}</p>
        </section>
    )

}
export default Card