import Card from "./Card";
import { useLanguageContext } from './useLanguageContext';

const MainPage = () => {
    const data = useLanguageContext();
    if (!data) {
        return <p>Loading...</p>;
    }
    return (
        <div className="rounded-lg h-screen w-3/6 mx-auto flex items-center">
            {data.data.map((car, index) => (
                <Card key={index} type={car.type} description={car.description} icon={car.icon} clr={car.clr} />
            ))}
        </div>
    );
};

export default MainPage;