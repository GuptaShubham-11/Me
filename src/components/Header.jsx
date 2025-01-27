import { useState } from 'react';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <header
            className={`p-4 flex justify-between items-center ${darkMode ? 'bg-backgroundDark-500 text-textDark-500' : 'bg-backgroundLight-500 text-textDark-500'} backdrop-blur-lg bg-opacity-30`}
        >
            <h1 className="text-4xl font-bold">
                <span className="text-primaryLight-500 dark:text-primaryDark-500">Shubham</span>
                <span className="text-accentLight-500 dark:text-accentDark-500"> Dev</span>
            </h1>
            <button
                className="px-4 py-2 rounded-lg bg-secondaryLight-500 dark:bg-secondaryDark-500 text-textLight-500 dark:text-textDark-500"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? 'Light' : 'Dark'}
            </button>
        </header>
    );
}
