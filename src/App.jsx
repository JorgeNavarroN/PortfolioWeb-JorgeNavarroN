import { useEffect } from "react";
import "./App.css";
import Certificaciones from "./components/Certificaciones.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";
import Proyectos from "./components/Proyectos.jsx";
import SobreMi from "./components/SobreMi.jsx";
import { useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickNavItem = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#010208] min-h-screen text-white">
      <div className="bg-gradient-to-b from-[#3f89ad] absolute w-[80px] h-[500px] -rotate-[25deg] left-[150px] -top-[95px] blur-3xl animate-[pulse_2s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b from-[#3f89ad] absolute w-[120px] h-[800px] -rotate-[45deg] left-[300px] -top-[185px] blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r from-[#3f89ad] absolute w-[500px] h-[80px] rotate-[25deg] left-[75px] top-[50px] blur-3xl animate-[pulse_1s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-b from-[#3f89ad] absolute w-[80px] h-[250px] -rotate-[25deg] left-[550px] -top-[95px] blur-3xl animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b from-[#3f89ad] absolute w-[120px] h-[400px] -rotate-[45deg] left-[700px] -top-[185px] blur-3xl animate-[pulse_3.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r from-[#3f89ad] absolute w-[500px] h-[80px] rotate-[25deg] left-[275px] top-[50px] blur-3xl animate-[pulse_2.5s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-tr from-[#3f89ad] rounded-full absolute w-[200px] h-[700px] top-[800px] right-0 blur-[300px] animate-[pulse_1s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-tr from-[#3f89ad] rounded-full absolute w-[500px] h-[1000px] top-[1000px] -left-56 blur-[300px] animate-[pulse_2.8s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-tl from-[#3f89ad] rounded-full absolute w-[500px] h-[1000px] top-[2300px] right-0 blur-[300px] animate-[pulse_2s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-tl from-[#3f89ad] rounded-full absolute w-[800px] h-[300px] top-[3000px] blur-[300px] animate-[pulse_1s_ease-in-out_infinite]"></div>
      <div className="grid grid-cols-1 w-[1200px] min-w-[1200px] mx-auto">
        <header className="col-span-2 grid place-self-center items-center h-24 w-fit z-20 sticky top-0">
          <nav
            className={`rounded-full px-10 py-2 transition-all duration-300 ${
              scrolled &&
              "bg-slate-500/20 drop-shadow-[0_10px_4px_rgb(0,0,0)] backdrop-blur-2xl"
            }`}
          >
            <ul className="flex gap-4">
              <li className="relative">
                <a
                  className="after:bottom-0 after:block after:absolute after:h-[2px] after:w-[0px] after:bg-white after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all"
                  href="#experiencia-section"
                  onClick={(e) => handleClickNavItem(e, "experiencia-section")}
                >
                  Experiencia
                </a>
              </li>
              <li className="relative">
                <a
                  className="after:bottom-0 after:block after:absolute after:h-[2px] after:w-[0px] after:bg-white after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all"
                  href="#proyectos-section"
                  onClick={(e) => handleClickNavItem(e, "proyectos-section")}
                >
                  Proyectos
                </a>
              </li>
              <li className="relative">
                <a
                  className="after:bottom-0 after:block after:absolute after:h-[2px] after:w-[0px] after:bg-white after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all"
                  href="#sobremi-section"
                  onClick={(e) => handleClickNavItem(e, "sobremi-section")}
                >
                  Sobre mí
                </a>
              </li>
              <li className="relative">
                <a
                  className="after:bottom-0 after:block after:absolute after:h-[2px] after:w-[0px] after:bg-white after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all"
                  href=""
                >
                  Contactame
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="z-10 grid grid-cols-2 gap-x-20 gap-y-52">
          {/* HERO */}
          <Hero />

          {/* MAIN */}
          <Main />

          {/* EXTRA */}
          <Proyectos />

          <Certificaciones />

          <SobreMi />
        </main>

        {/* FOOTER */}
        <footer className="col-span-2 grid grid-cols-2 place-self-center items-center mt-[9rem] h-[9rem]">
          <ul className="flex flex-row gap-8">
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">GitHub</a>
            </li>
            <li>
              <a href="">Contactamé</a>
            </li>
          </ul>
          <small>
            © 2025 Jorge Navarro Núñez. Todos los derechos reservados.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
