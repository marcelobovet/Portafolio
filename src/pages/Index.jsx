import { About } from '../components/About';
import { DarkMode } from '../components/DarkMode';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';

const Index = () => {
  return (
    <>
      <DarkMode />
      <Header />
      <hr className="mt-10 h-full"></hr>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default Index;
