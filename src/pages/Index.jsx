import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Projects } from '../components/Projects';

const Index = () => {
  return (
    <>
      <div className="bottom-0 static flex justify-end items-center py-1 px-5 z-20 bg-white bg-opacity-80 backdrop-blur-lg h-full">
        <button> Hola</button>
      </div>
      <Header />
      <hr className="mt-10"></hr>
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default Index;
