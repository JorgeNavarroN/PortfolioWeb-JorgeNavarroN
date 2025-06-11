import LinkReference from "./LinkReference";
import useInitialAnimate from "../hooks/useInitialAnimate";
import { useContext } from "react";
import { ThemeContext } from "../assets/contexts/ThemeContext";
import { DocumentIcon, GithubIcon, LinkedInIcon, LocationIcon } from "./Icons";

export default function Hero() {
  const { isVisible, ref } = useInitialAnimate();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      ref={ref}
      className={`z-10 h-full my-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <article className="grid items-center gap-y-[1.25rem]">
        <header className="grid grid-cols-[auto_1fr] items-center gap-x-[1rem]">
          <img
            className="rounded-full sm:row-span-2 max-sm:col-span-2"
            width={82}
            height={82}
            src="https://res.cloudinary.com/dl1fugaha/image/upload/v1749648760/profile_f8zuz8.jpg"
            alt="Foto Jorge Navarro Nuñez 🤓"
          />
          <h1 className="md:col-start-2 text-[2.5rem] font-medium dark:text-white text-[#333]">
            Jorge Navarro Nuñez
          </h1>
          <p className="xl:col-start-2 lg:col-start-2 max-sm:col-span-2 text-[1.125rem] font-light tracking-[0.25rem] drop-shadow-[0_0.313rem_0.438rem_rgb(0,0,0)] dark:text-white text-[#333]">
            Técnico en Ingenieria de Software
          </p>
        </header>
        <main className="flex flex-col gap-4">
          <p className="text-xl dark:text-white text-[#333]">
            Desarrollador de software junior. Busco aportar con mis
            conocimientos y proponer{" "}
            <strong className="font-bold dark:text-[#00c3ff]">
              soluciones innovadoras{" "}
            </strong>
            en la industria tecnológica.
          </p>
          <div className="flex flex-row items-center gap-5">
            <LocationIcon fill={isDarkMode ? "#fff" : "#333"} />
            <h3 className="text-2xl dark:text-white text-[#333]">Perú</h3>
            <img
              src="https://flagsapi.com/PE/flat/32.png"
              alt="Bandera del Perú"
            />
          </div>
        </main>
        <footer className="flex flex-col gap-8">
          <LinkReference href={"https://www.linkedin.com/in/jorgenavarron/"}>
            <LinkedInIcon stroke={isDarkMode ? "#fff" : "#333"} />
            LinkedIn
          </LinkReference>
          <LinkReference
            href={"https://github.com/JorgeNavarroN?tab=repositories"}
          >
            <GithubIcon width={32} stroke={isDarkMode ? "#fff" : "#333"} />
            GitHub
          </LinkReference>
          <LinkReference
            href={"/files/JORGENAVARRON.pdf"}
            file={"CV_JORGENAVARRON.pdf"}
            isDownloaded
          >
            <DocumentIcon width={32} stroke={isDarkMode ? "#fff" : "#333"} />
            Descargar CV
          </LinkReference>
        </footer>
      </article>
    </section>
  );
}
