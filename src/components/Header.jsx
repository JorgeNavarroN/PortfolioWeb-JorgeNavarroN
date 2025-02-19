import { useContext } from "react";
import { ThemeContext } from "../assets/contexts/ThemeContext";
import useScroll from "../hooks/useScroll";
import HamburgerMenuIcon from "../assets/icons/HamburgerMenuIcon";
import useOpenMenu from "../hooks/useOpenMenu";
import DarkModeIcon from "../assets/icons/DarkModeIcon";
import LightModeIcon from "../assets/icons/LightModeIcon";
import SystemIconDark from "../assets/icons/SystemIconDark";
import useChooseTheme from "../hooks/useChooseTheme";

export default function Header() {
  const { theme, isDarkMode } = useContext(ThemeContext);
  const [scrolled, handleClickNavItem] = useScroll();
  const [isOpenMenu, handleClickMenu] = useOpenMenu();
  const [isOpenChooseTheme, handleClickChooseTheme, handleTheme] =
    useChooseTheme();

  return (
    <header
      className={`col-span-2 grid place-self-center items-start mt-6 h-24 w-fit z-20 fixed top-0`}
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
            fill={isDarkMode ? "#fff" : "#000"}
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
              onClick={(e) => handleClickNavItem(e, "certificaicones-section")}
            >
              Certificaciones
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
            <button onClick={handleClickChooseTheme} className="cursor-pointer">
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
  );
}
