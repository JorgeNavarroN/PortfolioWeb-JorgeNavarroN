import "./App.css";
import Certificaciones from "./components/Certificaciones.jsx";
import Hero from "./components/Hero.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Proyectos from "./components/Proyectos.jsx";
import SobreMi from "./components/SobreMi.jsx";
import useScroll from "./hooks/useScroll.js";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "./assets/contexts/ThemeContext.jsx";
import SystemIconDark from "./assets/icons/SystemIconDark.jsx";

function App() {
  const [scrolled, handleClickNavItem] = useScroll();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const [isOpenChooseTheme, setIsOpenChooseTheme] = useState(true);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    document.body.classList.add("overflow-x-hidden");
    return () => {
      document.body.classList.remove("overflow-x-hidden");
    };
  }, []);

  return (
    <div className="dark:bg-[#010208] bg-[#eeeff5] min-h-screen text-white">
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[5rem] h-[31.25rem] -rotate-[25deg] left-[9.375rem] -top-[5.938rem] blur-[3.625rem] animate-[pulse_2s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[7.5rem] h-[50rem] -rotate-[45deg] left-[18.75rem] -top-[11.563rem] blur-[3.625rem] animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r dark:from-[#3f89ad] absolute w-[31.25rem] h-[5rem] rotate-[25deg] left-[4.688rem] top-[3.125rem] blur-[3.625rem] animate-[pulse_1s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[5rem] h-[23.125rem] -rotate-[25deg] left-[53.125rem] -top-[5.938rem] blur-[3.625rem] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[7.5rem] h-[25rem] -rotate-[45deg] left-[43.75rem] -top-[11.563rem] blur-[3.625rem] animate-[pulse_3.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r dark:from-[#3f89ad] absolute w-[31.25rem] h-[5rem] rotate-[25deg] left-[24.688rem] top-[3.125rem] blur-[3.625rem] animate-[pulse_2.5s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-tr dark:from-[#3f89ad] rounded-full absolute w-[31.25rem] h-[62.5rem] top-[62.5rem] -left-56 blur-[12.5rem] animate-[pulse_3.8s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-r dark:from-[#3f89ad] rounded-full absolute w-[50rem] h-[31.25rem] top-[193.75rem] blur-[12.5rem] animate-[pulse_4s_ease-in-out_infinite]"></div>

      <div className="grid grid-cols-1 xl:w-[75rem] xl:min-w-[75rem] lg:w-[60rem] lg:min-w-[60rem] md:w-[45rem] md:min-w-[45rem] sm:w-[35rem] sm:min-w-[35rem] max-sm:w-[20rem] max-sm:min-w-[20rem] mx-auto">
        <header
          className={`col-span-2 grid place-self-center items-center h-24 w-fit z-20 sticky top-0`}
        >
          <nav
            className={`flex flex-col px-10 py-2 sm:rounded-full max-sm:rounded-3xl max-sm:gap-4 transition-all duration-300 dark:text-white text-[#010208] ${
              scrolled &&
              "bg-slate-500/20 drop-shadow-[0_0.625rem_0.25rem_rgb(0,0,0)] backdrop-blur-2xl text-white"
            }`}
          >
            <button
              onClick={handleClickMenu}
              className={`rounded-full flex flex-col items-center px-10 py-2 transition-all duration-300 cursor-pointer w-fit place-self-center sm:hidden ${
                isOpenMenu ? "" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <g fill="#fff">
                  <path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 4a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 20a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z" />
                </g>
              </svg>
            </button>
            <ul
              className={`flex gap-4 sm:flex-row max-sm:flex-col items-center max-sm:items-center ${
                !isOpenMenu ? "max-sm:hidden" : ""
              }`}
            >
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-white after:bg-black after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all ${
                    scrolled && "after:bg-white"
                  }`}
                  href="#experiencia-section"
                  onClick={(e) => handleClickNavItem(e, "experiencia-section")}
                >
                  Experiencia
                </a>
              </li>
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-white after:bg-black after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all ${
                    scrolled && "after:bg-white"
                  }`}
                  href="#proyectos-section"
                  onClick={(e) => handleClickNavItem(e, "proyectos-section")}
                >
                  Proyectos
                </a>
              </li>
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-white after:bg-black after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all ${
                    scrolled && "after:bg-white"
                  }`}
                  href="#sobremi-section"
                  onClick={(e) => handleClickNavItem(e, "sobremi-section")}
                >
                  Sobre mí
                </a>
              </li>
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-white after:bg-black after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all ${
                    scrolled && "after:bg-white"
                  }`}
                  href="mailto:jorgenavarron4082@outlook.com"
                >
                  Contactame
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpenChooseTheme(!isOpenChooseTheme);
                  }}
                >
                  <SystemIconDark />
                </button>
                <div className="absolute right-0 bg-[#010208] border-[1px] border-gray-700 w-[7rem] py-4 rounded-xl">
                  <ul className="">
                    <li
                      onClick={() => handleThemeChange("dark")}
                      className="hover:bg-white/50 px-4 py-2 cursor-pointer"
                    >
                      Dark
                    </li>
                    <li
                      onClick={() => handleThemeChange("light")}
                      className="hover:bg-white/50 px-4 py-2 cursor-pointer"
                    >
                      Light
                    </li>
                    <li
                      onClick={() => handleThemeChange("system")}
                      className="hover:bg-white/50 px-4 py-2 cursor-pointer"
                    >
                      System
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </header>

        <main className="z-10 grid lg:grid-cols-2 max-lg:flex max-lg:flex-col gap-x-20 gap-y-52">
          {/* HERO */}
          <Hero />

          {/* MAIN */}
          <Experiencia />

          {/* EXTRA */}
          <Proyectos />

          <Certificaciones />

          <SobreMi />
        </main>

        {/* FOOTER */}
        <footer className="col-span-2 grid md:grid-cols-2 md:place-self-center md:items-center my-[9rem] h-[9rem] sm:flex-col sm:text-center max-sm:text-center sm:gap-8 max-sm:gap-8">
          <ul className="flex md:flex-row max-sm:flex-col sm:flex-col gap-8">
            <li>
              <a
                className="dark:text-white text-[#010208]"
                target="_blank"
                href="https://www.linkedin.com/in/jorgenavarron/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="dark:text-white text-[#010208]"
                target="_blank"
                href="https://github.com/JorgeNavarroN"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="dark:text-white text-[#010208]"
                href="mailto:jorgenavarron4082@outlook.com"
              >
                Contactamé
              </a>
            </li>
          </ul>
          <small className="dark:text-white text-[#010208]">
            © 2025 Jorge Navarro Núñez. Todos los derechos reservados.
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
