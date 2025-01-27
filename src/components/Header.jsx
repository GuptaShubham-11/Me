import ThemeToggle from "./ThemeToggle.jsx"; // Adjust the path if necessary

export default function Header() {
    return (
        <header className="p-4 flex justify-between items-center transition-all ease-in-out duration-300 bg-backgroundLight-500 dark:bg-backgroundDark-500 text-textDark-500 dark:text-textDark-500">
            <h1 className="text-4xl font-bold">
                <span className="text-primaryLight-500 dark:text-primaryDark-500">Shubham</span>
                <span className="text-accentLight-500 dark:text-accentDark-500"> Dev</span>
            </h1>

            <div className="flex items-center space-x-4">
                {/* Theme Toggle Button */}
                <ThemeToggle />
            </div>
        </header>
    );
}
