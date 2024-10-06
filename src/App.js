// src/App.jsx
import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contacts';
import Tools from './Components/Tools';
import Certifications from './Components/Certifications';

function App() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-800 text-white min-h-screen overflow-auto">
      <Header />
      <main className="pt-14 ">
        <section className=" m-0 p-4"> {/* Added padding, removed margin */}
          <About />
        </section>
        <section className=" m-0 p-4"> {/* Added padding, removed margin */}
          <Contact />
        </section>
        <section className=" m-0 p-4"> {/* Added padding, removed margin */}
          <Certifications />
        </section>
        <section className=" m-0 p-4"> {/* Added padding, removed margin */}
          <Skills />
        </section>
        <section className=" m-0 p-4"> {/* Added padding, removed margin */}
          <Tools />
        </section>
        <section className=" m-0 p-4"> {/* Added padding, removed margin */}
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
