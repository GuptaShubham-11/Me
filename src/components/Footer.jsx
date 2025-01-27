import { useState } from 'react';

export default function Footer() {

    return (
        <footer
            className={`p-4 text-center 
                bg-backgroundLight-500 text-textLight-500 
                dark:bg-backgroundDark-500 dark:text-textDark-500 
                transition-all duration-300 ease-in-out`}
        >
            <p className="text-sm">
                &copy; {new Date().getFullYear()} <span className="font-bold text-accentLight-500 dark:text-accentDark-500">Shubham Dev</span>
            </p>
        </footer>
    );
}
