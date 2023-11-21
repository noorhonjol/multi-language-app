/* eslint-disable react/prop-types */
import randomColor from "randomcolor";
const Card=({type,description,icon,name})=>{
    return(
        <section style={{backgroundColor:randomColor({"luminosity":"light"})}} className={`px-10 h-1/2`}>
            {name}
            <img className="mt-10" src={icon}/>
            <h1 style={{color:"gray"}} className=" text-4xl mt-12">{type}</h1>
            <p  style={{color:"gray"}} className="mt-12 text-md">{description}</p>
        </section>
    )
    }
export default Card