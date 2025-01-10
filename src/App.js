import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contacts';
import Tools from './Components/Tools';
import Certifications from './Components/Certifications';
import LeetCodeDashboard from './Components/LeetCodeDashboard';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import { profileImage } from './config/config';
import LeetCodeStats from './Components/LeetcodeStats';
import Dashboard from './Components/Album/Dashboard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  // Set the favicon dynamically
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = profileImage;
  document.head.appendChild(link);

  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen overflow-auto">
      <Header />
      <main className="pt-14 ">
        <section className=" m-0 p-4"> {/* Added About Section */}
          <About />
        </section>
        <section className=" m-0 p-4"> {/* Added About Section */}
          <Experience />
        </section>
        <section className=" m-0 p-4"> {/* Added Contact Section */}
          <Contact />
        </section>
        <section className=" m-0 p-4"> {/* Added Certifications Section */}
          <Certifications />
        </section>
        <section className=" m-0 p-4"> {/* Added Skills Sectionn */}
          <Skills />
        </section>
        <section className=" m-0 p-4"> {/* Added Tools Section */}
          <Tools />
        </section>
        <section className=" m-0 p-4"> {/* Added LeetCodeDashboard Section */}
          <LeetCodeDashboard />
        </section>
        <section className=" m-0 p-4"> {/* Added Projects Section */}
          <Projects />
        </section>
        <section className=" m-0 p-4"> {/* Added Footer Section */}
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;