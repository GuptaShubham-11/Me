import { Header, Footer } from ".";
import { lazy, Suspense } from "react";

const CustomCursor = lazy(() => import("./CustomCursor"));
const Sidebar = lazy(() => import("./Sidebar"));

const Layout = ({ children }) => {
    return (
        <div className="relative flex flex-col min-h-screen overflow-x-hidden transition-colors duration-300 bg-backgroundLight dark:bg-backgroundDark">
            <Suspense fallback={null}>
                <CustomCursor />
            </Suspense>
            <Header />
            <div className="flex flex-grow">
                <Suspense fallback={null}>
                    <Sidebar />
                </Suspense>
                <main className="flex-grow p-4 md:p-6 transition-all duration-300">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
