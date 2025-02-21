import { useContext } from "react";
import useInitialAnimate from "../hooks/useInitialAnimate";
import { ThemeContext } from "../assets/contexts/ThemeContext";
import { UserCheckIcon } from "./Icons";

export default function SobreMi() {
  const { isVisible: isVisible1, ref: ref1 } = useInitialAnimate();
  const { isVisible: isVisible2, ref: ref2 } = useInitialAnimate();
  const { isVisible: isVisible3, ref: ref3 } = useInitialAnimate();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      id="sobremi-section"
      className="col-span-2 grid grid-cols-1 gap-8 dark:text-white text-[#333]"
    >
      <header className="flex flex-row items-center gap-8">
        <UserCheckIcon stroke={isDarkMode ? "#fff" : "#333"} />
        <h2 className="text-3xl font-medium my-10">Sobre mí</h2>
      </header>
      <main>
        <article className="grid lg:grid-cols-[auto_1fr] max-lg:flex max-lg:flex-col items-center gap-20">
          <div className="relative">
            <img
              ref={ref1}
              width={272}
              height={272}
              className={`rounded-xl transition-all duration-[1500ms] drop-shadow-[0_0.3rem_0.6rem_rgb(0,0,0)] ${
                isVisible1 ? "opacity-100" : "opacity-0"
              }`}
              src="https://github.com/JorgeNavarroN.png"
              alt="Jorge Navarro 😎"
            />
            <div
              ref={ref2}
              className={`w-[17rem] h-[17rem] duration-[1000ms] dark:bg-[#144257] bg-[#919191] rounded-xl absolute top-4 right-4 rotate-2 -z-10 drop-shadow-[0_0.3rem_0.6rem_rgb(0,0,0)] ${
                isVisible2 ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div
              ref={ref3}
              className={`w-[17rem] h-[17rem] duration-[500ms] dark:bg-[#061b36] bg-[#4b4b4b] rounded-xl absolute top-8 -right-4 -rotate-2 -z-20 drop-shadow-[0_0.3rem_0.6rem_rgb(0,0,0)] ${
                isVisible3 ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              Soy Jorge, egresado de la carrera técnica de Ingeniería de
              Software con Inteligencia Artificial. Me interesa crear soluciones
              tecnológicas eficientes e innovadoras, aplicando mis conocimientos
              en Java, SQL Server y desarrollo web.
            </p>
            <p className="text-xl">
              He participado en proyectos que involucran integración de APIs,
              desarrollo backend y gestión de bases de datos.
            </p>
            <p className="text-xl">
              Siempre estoy en busca de mejorar mis habilidades y mantenerme
              actualizado con las últimas tecnologías.
            </p>
          </div>
        </article>
      </main>
    </section>
  );
}
