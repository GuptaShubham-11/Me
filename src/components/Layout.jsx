import { Header, Footer, CustomCursor } from '.';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <CustomCursor />
            <Header />
            <Sidebar />
            <main className="flex-grow p-4 md:p-6 transition-all duration-300">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
