import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
    const theme = useSelector((state) => state.theme.theme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main content (children passed from App.js) */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Layout
