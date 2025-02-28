import React from 'react';
import {useState} from 'react';
import './navbar.css'

const Navbar2 = () => {
    const [language, setLanguage] = useState('Uzbekcha');

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <nav>
            <ul style={{
                display: 'flex', flexDirection: 'row'
            }}>
                <li>{language === 'Uzbekcha' ? 'Biz haqimizda' : 'О нас'}</li>
                <li>{language === 'Uzbekcha' ? 'Xizmatlar' : 'Услуги'}</li>
                <li>{language === 'Uzbekcha' ? 'Portfolio' : 'Портфолио'}</li>
                <li>{language === 'Uzbekcha' ? 'Mijozlar' : 'Клиенты'}</li>
                <li>{language === 'Uzbekcha' ? 'Jamoa' : 'Команда'}</li>
                <li>{language === 'Uzbekcha' ? 'Kontakt' : 'Контакт'}</li>
            </ul>
            <div className={'div'}>
                <select onChange={handleLanguageChange}>
                    <option value="Uzbekcha">Uzbekcha</option>
                    <option value="Russian">Russian</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar2;
