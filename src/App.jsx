import "./App.css";
import Certificaciones from "./components/Certificaciones.jsx";
import Hero from "./components/Hero.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Proyectos from "./components/Proyectos.jsx";
import SobreMi from "./components/SobreMi.jsx";
import useScroll from "./hooks/useScroll.js";
import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "./assets/contexts/ThemeContext.jsx";
import SystemIconDark from "./assets/icons/SystemIconDark.jsx";
import DarkModeIcon from "./assets/icons/DarkModeIcon.jsx";
import LightModeIcon from "./assets/icons/LightModeIcon.jsx";
import HamburgerMenuIcon from "./assets/icons/HamburgerMenuIcon.jsx";

const certificados = [
  {
    id: "v1739710315",
    src: "/cloudinary/images/v1739710315/course_certificate_JAVA_FUNDAMENTALS_page-0001_tzjfny.jpg",
    alt: "Certificado Java Fundamentals",
  },
  {
    id: "v1739710625",
    src: "/cloudinary/images/v1739710625/course_certificate_DATABASE_FOUNDATION_page-0001_lml4d6.jpg",
    alt: "Certificado Database Foundations",
  },
  {
    id: "v1739710609",
    src: "/cloudinary/images/v1739710609/course_certificate_JAVA_FOUNDATIONS_page-0001_z1ixwj.jpg",
    alt: "Java Foundations",
  },
  {
    id: "v1739710617",
    src: "/cloudinary/images/v1739710617/course_certificate_DATABASE_PROGRAMING_WITH_SQL_page-0001_ghiqzp.jpg",
    alt: "Database Programming with SQL",
  },
];

function App() {
  const [scrolled, handleClickNavItem] = useScroll();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { theme, isDarkMode, handleThemeChange } = useContext(ThemeContext);
  const [isOpenChooseTheme, setIsOpenChooseTheme] = useState(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleClickChooseTheme = () => {
    setIsOpenChooseTheme(!isOpenChooseTheme);
  };

  const handleTheme = (e) => {
    const element = e.target;
    const id = element.id;
    const theme = id.split("-")[0];
    handleThemeChange(theme);
    setIsOpenChooseTheme(false);
  };

  return (
    <div className="dark:bg-[#010208] relative bg-[#eeeff5] min-h-screen overflow-hidden text-white">
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[5rem] h-[31.25rem] -rotate-[25deg] left-[9.375rem] -top-[5.938rem] blur-[3.625rem] animate-[pulse_2s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[7.5rem] h-[50rem] -rotate-[45deg] left-[18.75rem] -top-[11.563rem] blur-[3.625rem] animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r dark:from-[#3f89ad]  absolute w-[31.25rem] h-[5rem] rotate-[25deg] left-[4.688rem] top-[3.125rem] blur-[3.625rem] animate-[pulse_1s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[5rem] h-[23.125rem] -rotate-[25deg] left-[53.125rem] -top-[5.938rem] blur-[3.625rem] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[7.5rem] h-[25rem] -rotate-[45deg] left-[43.75rem] -top-[11.563rem] blur-[3.625rem] animate-[pulse_3.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r dark:from-[#3f89ad] absolute w-[31.25rem] h-[5rem] rotate-[25deg] left-[24.688rem] top-[3.125rem] blur-[3.625rem] animate-[pulse_2.5s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-tr dark:from-[#3f89ad] rounded-full absolute w-[31.25rem] h-[62.5rem] top-[62.5rem] -left-56 blur-[12.5rem] animate-[pulse_3.8s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-r dark:from-[#3f89ad] rounded-full absolute w-[50rem] h-[31.25rem] top-[193.75rem] blur-[12.5rem] animate-[pulse_4s_ease-in-out_infinite]"></div>

      <div className="grid grid-cols-1 xl:w-[75rem] xl:min-w-[75rem] lg:w-[60rem] lg:min-w-[60rem] md:w-[45rem] md:min-w-[45rem] sm:w-[35rem] sm:min-w-[35rem] max-sm:w-[20rem] max-sm:min-w-[20rem] mx-auto">
        <header
          className={`col-span-2 grid place-self-center items-center h-24 w-fit z-20 fixed top-0`}
        >
          <nav
            className={`flex flex-col px-10 py-2 sm:rounded-full max-sm:rounded-3xl max-sm:gap-4 transition-all duration-300 dark:text-white text-[#010208] ${
              scrolled &&
              "bg-[#eeeff5]/60 dark:bg-[#010208]/40 drop-shadow-[0_0.5rem_0.7rem_rgb(0,0,0)] backdrop-blur-2xl"
            }`}
          >
            <button
              onClick={handleClickMenu}
              className={`rounded-full flex flex-col items-center px-10 py-2 transition-all duration-300 cursor-pointer w-fit place-self-center sm:hidden`}
            >
              <HamburgerMenuIcon
                fill={isDarkMode ? "#fff" : scrolled ? "#fff" : "#000"}
              />
            </button>
            <ul
              className={`flex gap-4 sm:flex-row max-sm:flex-col items-center max-sm:items-center ${
                !isOpenMenu ? "max-sm:hidden" : ""
              }`}
            >
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-[#eeeff5] after:bg-[#333] after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all`}
                  href="#experiencia-section"
                  onClick={(e) => handleClickNavItem(e, "experiencia-section")}
                >
                  Experiencia
                </a>
              </li>
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-white after:bg-[#333] after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all`}
                  href="#proyectos-section"
                  onClick={(e) => handleClickNavItem(e, "proyectos-section")}
                >
                  Proyectos
                </a>
              </li>
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-white after:bg-[#333] after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all`}
                  href="#sobremi-section"
                  onClick={(e) => handleClickNavItem(e, "sobremi-section")}
                >
                  Sobre mí
                </a>
              </li>
              <li className="relative">
                <a
                  className={`after:bottom-0 after:block after:absolute after:h-[0.125rem] after:w-[0rem] dark:after:bg-white after:bg-[#333] after:backdrop-blur-2xl hover:after:w-[100%] after:transition-all`}
                  href="mailto:jorgenavarron4082@outlook.com"
                >
                  Contactame
                </a>
              </li>
              <li>
                <button
                  onClick={handleClickChooseTheme}
                  className="cursor-pointer"
                >
                  {theme === "dark" ? (
                    <DarkModeIcon />
                  ) : theme === "light" ? (
                    <LightModeIcon stroke={isDarkMode ? "#fff" : "#333"} />
                  ) : (
                    <SystemIconDark stroke={isDarkMode ? "#fff" : "#333"} />
                  )}
                </button>
                <div
                  className={`absolute right-0 bg-[#eeeff5]/80 dark:bg-[#010208] border-[1px] border-gray-700 w-[7rem] py-4 rounded-xl ${
                    !isOpenChooseTheme && "hidden"
                  }`}
                >
                  <ul className="">
                    <li
                      id="dark-theme"
                      onClick={handleTheme}
                      className="dark:hover:bg-white/50 hover:bg-black/30 px-4 py-2 cursor-pointer"
                    >
                      Dark
                    </li>
                    <li
                      id="light-theme"
                      onClick={handleTheme}
                      className="dark:hover:bg-white/50 hover:bg-black/30 px-4 py-2 cursor-pointer"
                    >
                      Light
                    </li>
                    <li
                      id="system-theme"
                      onClick={handleTheme}
                      className="dark:hover:bg-white/50 hover:bg-black/30 px-4 py-2 cursor-pointer"
                    >
                      System
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </header>

        <main className="z-10 grid lg:grid-cols-2 mt-20 max-lg:flex max-lg:flex-col gap-x-20 gap-y-52">
          {/* HERO */}
          <Hero />

          {/* MAIN */}
          <Experiencia />

          {/* EXTRA */}
          <Proyectos />

          <Certificaciones certificados={certificados} />

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
