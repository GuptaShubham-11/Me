import { ThemeToggle } from ".";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

export default function Header() {
    const [star, setStar] = useState(0);

    // Initialize star count from localStorage
    useEffect(() => {
        const stared = localStorage.getItem("stared") === "true";
        setStar(stared ? 1 : 0);
    }, []);

    const toggleStar = () => {
        setStar(prev => {
            const newStar = prev === 0 ? 1 : 0;
            localStorage.setItem("stared", newStar === 1 ? "true" : "false");

            // 🎉 Trigger Confetti Effect when starred
            if (newStar === 1) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    angle: 90,
                    origin: { y: 0.6 },
                });
            }
            return newStar;
        });
    };

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center 
                transition-all ease-in-out duration-300 bg-opacity-80 bg-transparent 
                backdrop-blur-md text-textDark-500 dark:text-textDark-500">

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    <span className="text-primaryLight-500">Shubham</span>
                    <span className="text-accentLight-500 dark:text-secondaryDark-500"> Dev</span>
                </h1>

                <div className="flex items-center space-x-2 sm:space-x-4">
                    <ThemeToggle />
                    <button
                        onClick={toggleStar}
                        className="p-2 px-4 rounded outline-none cursor-pointer 
                            bg-primaryLight-500 text-textDark-500 
                            dark:bg-primaryDark-500 dark:text-textDark-500 font-bold"
                    >
                        {star} 🌟
                    </button>
                </div>
            </header>

            {/* Spacer for header */}
            <div className="h-16 md:h-20"></div>
        </>
    );
}
