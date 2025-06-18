import React, { useEffect, useRef, useState } from 'react'
import IconMoon from './icons/IconMoon'
import IconSun from './icons/IconSun';
const inicialStateTheme = localStorage.getItem('theme') === 'dark' ? true : false;
console.log('inicialStateTheme::: ', inicialStateTheme);
const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateTheme);

    const refHeader = useRef(null);


    useEffect(() => {
        console.log('darkMode::: ', darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            // localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');


        }
    }
        , [darkMode]);

    return (
        <header className="container mx-auto   px-4 pt-8 md:max-w-xl" ref={refHeader}>
            <div className="flex justify-between mt-8">
                <h1 className="text-3xl uppercase text-white font-semibold tracking-[0.3em]">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {
                        !darkMode ? <IconMoon /> : <IconSun />


                    }

                </button>
            </div>
        </header>
    )
}

export default Header