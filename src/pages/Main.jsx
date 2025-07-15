import { Hero, Projects, Skills, Contact, WhyMe } from '../components';

export default function Main() {
  return (
    <main className="" aria-label="Main Content">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Why Work With Me Section */}
      <WhyMe />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
