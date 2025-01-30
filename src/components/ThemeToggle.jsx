import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice.js";
import { useEffect } from "react";

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const handleToggle = () => {
        // Update Redux state
        dispatch(toggleTheme());
    };

    useEffect(() => {
        document.documentElement.className = theme;
        document.body.className = theme;
    }, [theme]);

    return (
        <button
            onClick={handleToggle}
            className={`p-2 px-4 rounded outline-none cursor-pointer 
        bg-primaryLight-500 text-textDark-500 
        dark:bg-primaryDark-500 dark:text-textDark-500`}
        >
            {theme === "dark" ? "Dark" : " Light"}
        </button>

    );
};

export default ThemeToggle;
