import { Hero, Projects, Skills, Contact, WhyMe } from '../components';

export default function Main() {
  return (
    <main
      className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4"
      aria-label="Main Content"
    >
      <Hero />
      <Projects />
      <Skills />
      <WhyMe />
      <Contact />
    </main>
  );
}
