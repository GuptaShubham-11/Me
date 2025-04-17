import { ThemeToggle } from ".";

export default function Header() {
    return (
        <>
            <header
                className="fixed top-0 left-0 w-full z-50 px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center
        transition-all ease-in-out duration-300 bg-background text-text
        backdrop-blur-lg shadow-md bg-opacity-90"
            >
                {/* Logo */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    <span className="text-primaryLight-500 dark:text-primaryDark-500 brightness-125">Shubham</span>
                    <span className="text-accentLight-500 dark:text-accentDark-500 brightness-125"> Dev</span>
                </h1>

                {/* Theme Toggle */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <ThemeToggle />
                </div>
            </header>

            {/* Spacer for header height */}
            <div className="h-16 sm:h-20 md:h-24"></div>
        </>
    );
}
