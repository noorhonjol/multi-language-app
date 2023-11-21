import { useState } from "react";
import Card from "./Card";
import { useLanguageContext } from './useLanguageContext';

const MainPage = () => {
    const [count,setCount]=useState(0)
    const data = useLanguageContext();
    if (!data) {
        return <p>Loading...</p>;
    }
    return (
        <div className="rounded-lg h-screen w-3/6 mx-auto flex items-center">
            {data.data.map((car, index) => (
                <Card key={index} 
                type={car.type} 
                count={count} 
                description={car.description}
                icon={car.icon}/>
            ))}
            <button onClick={()=>setCount(count+1)}></button>
        </div>
    );
};

export default MainPage;