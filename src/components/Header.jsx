import { ThemeToggle } from ".";

export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center 
                transition-all ease-in-out duration-300 bg-opacity-90 bg-backgroundLight-500 dark:bg-backgroundDark-500 
                backdrop-blur-lg text-textLight-500 dark:text-textDark-500 shadow-md">

                {/* Logo */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                    <span className="text-primaryLight-500 dark:text-primaryDark-500 brightness-125">Shubham</span>
                    <span className="text-accentLight-500 dark:text-secondaryDark-500 brightness-125"> Dev</span>
                </h1>

                {/* Theme Toggle */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <ThemeToggle />
                </div>
            </header>

            {/* Spacer to prevent content from being hidden under fixed header */}
            <div className="h-16 sm:h-20 md:h-24"></div>
        </>
    );
}
