import { Hero, Projects, Skills, Contact, WhyMe } from "../components";

export default function Main() {
    return (
        <main className="" aria-label="Main Content">
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
