import { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';


export const useLanguageContext = () => {
    return useContext(LanguageContext);
};
