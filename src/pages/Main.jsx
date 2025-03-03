import { Hero, Projects, Skills, Contact, WhyMe } from "../components";

export default function Main() {
    return (
        <main className="flex-grow p-4 md:p-6" aria-label="Main Content">
            <Hero />
            <div className="py-3">
                <Projects />
            </div>
            <div className="py-3">
                <Skills />
            </div>
            <div className="py-3">
                <WhyMe />
            </div>
            <div className="py-3">
                <Contact />
            </div>
        </main>
    );
}
