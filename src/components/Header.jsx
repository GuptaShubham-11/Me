import { ThemeToggle } from ".";

export default function Header() {
    return (
        <>
            {/* Header */}
            <header className="fixed top-0 left-0 w-full z-50 p-4 flex justify-between items-center transition-all ease-in-out duration-300 bg-opacity-80 bg-transparent backdrop-blur-md text-textDark-500 dark:text-textDark-500">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    <span className="text-primaryLight-500">Shubham</span>
                    <span className="text-accentLight-500 dark:text-secondaryDark-500"> Dev</span>
                </h1>

                <div className="flex items-center space-x-2 sm:space-x-4">
                    <ThemeToggle />
                </div>
            </header>

            {/* Spacer for header */}
            <div className="h-16 md:h-20"></div>
        </>
    );
}
