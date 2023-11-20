/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const { lang } = useParams();
    const [language, setLanguage] = useState(lang);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lng = localStorage.getItem(`lng-file-${language}`);
                if (lng) {
                    setData(JSON.parse(lng));
                } else {
                    const response = await fetch(`http://localhost:3000/${language}`);
                    const result = await response.json();

                    setData(result);
                    localStorage.setItem(`lng-file-${language}`, JSON.stringify(result));

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [language]); 

    useEffect(() => {
        setLanguage(lang);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ language, data }}>
            {children}
        </LanguageContext.Provider>
    );
};
