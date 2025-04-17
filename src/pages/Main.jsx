import { Hero, Projects, Skills, Contact, WhyMe } from "../components";

export default function Main() {
    return (
        <main className="overflow-hidden" aria-label="Main Content">
            {/* Hero Section */}
            <Hero />

            {/* Projects Section */}
            <div className="py-3">
                <Projects />
            </div>

            {/* Skills Section */}
            <div className="py-3">
                <Skills />
            </div>

            {/* Why Work With Me Section */}
            <div className="py-3">
                <WhyMe />
            </div>

            {/* Contact Section */}
            <div className="py-3">
                <Contact />
            </div>
        </main>
    );
}
