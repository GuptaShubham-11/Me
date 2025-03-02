import { Hero, Projects, Skills, Contact, WhyMe } from "../components";
export default function Main() {
    return (
        <main className="flex-grow p-4 md:p-6">
            <Hero />
            <Projects />
            <Skills />
            <WhyMe />
            <Contact />
        </main>
    );
}
