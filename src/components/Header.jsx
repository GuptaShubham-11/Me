import { ThemeToggle } from ".";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Header() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [starCount, setStarCount] = useState(0);
    const [isStarred, setIsStarred] = useState(false);
    const { width, height } = useWindowSize();

    // Load from localStorage on mount
    useEffect(() => {
        const savedStar = localStorage.getItem("isStar") === "true";
        const savedCount = parseInt(localStorage.getItem("starCount")) || 0;
        setIsStarred(savedStar);
        setStarCount(savedCount);
    }, []);

    const toggleStar = () => {
        let newStarred = !isStarred;
        let newCount = newStarred ? starCount + 1 : Math.max(0, starCount - 1);

        setIsStarred(newStarred);
        setStarCount(newCount);
        localStorage.setItem("isStar", newStarred.toString());
        localStorage.setItem("starCount", newCount.toString());

        if (newStarred) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
        }
    };

    return (
        <>
            {/* 🎉 Confetti Effect (only when starred) */}
            {showConfetti && <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />}

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
                        {isStarred ? "Un-Star" : "Star"} 🌟 {starCount}
                    </button>
                </div>
            </header>

            {/* Spacer for header */}
            <div className="h-16 md:h-20"></div>
        </>
    );
}
