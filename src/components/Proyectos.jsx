import { useContext } from "react";
import FolderIcon from "../assets/icons/FolderIcon";
import Proyecto from "./Proyectos/Proyecto";
import { ThemeContext } from "../assets/contexts/ThemeContext";

export default function Proyectos() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      id="proyectos-section"
      className="col-span-2 row-start-2 grid grid-cols-1 gap-8 my-10 dark:text-white text-[#333]"
    >
      <header className="flex flex-row items-center gap-8">
        <FolderIcon stroke={isDarkMode ? "#fff" : "#333"} />
        <h2 className="text-3xl font-medium my-10">Proyectos</h2>
      </header>
      <ul className="flex flex-col gap-20">
        <li className="grid xl:grid-cols-2 gap-20">
          <Proyecto
            nameClass={"rotate-2"}
            imageURL={
              "/cloudinary/images/v1739720424/portfolio-web-bruno_qpuuep.jpg"
            }
            title={"Portfolio web de ING. Bruno Navarro"}
            description={
              "Portafolio web para Bruno Navarro, con el objetivo de resaltar su experiencia profesional y proyectos de manera clara y atractiva. La página cuenta con un diseño moderno y responsivo, garantizando una excelente experiencia en cualquier dispositivo."
            }
            linkRepository={"https://github.com/JorgeNavarroN/Dodge-Car-rep"}
            linkPreview={"https://brunonavdev.netlify.app/"}
            tecnologias={["html", "tailwindcss", "javascript"]}
          />
        </li>
        <li className="grid xl:grid-cols-2 gap-20">
          <Proyecto
            nameClass={"-rotate-2"}
            imageURL={
              "/cloudinary/images/v1739463920/360226414-14d48934-c090-42cb-acef-335aad935a28_txjb1d.png"
            }
            title={"Real Time Weather"}
            description={
              "Aplicación web para visualizar el clima actual y los pronosticos para los 5 dias posteriores de diferentes ciudades, incluyendo la ubicación actual. Utilizando React y Tailwindcss, con conexion a la API de OpenWeatherMap."
            }
            linkPreview={"https://waveweather.netlify.app/"}
            linkRepository={
              "https://github.com/JorgeNavarroN/REAL-TIME-WEATHER-REACT"
            }
            tecnologias={["react", "tailwindcss"]}
          />
        </li>
        <li className="grid xl:grid-cols-2 gap-20">
          <Proyecto
            nameClass={"rotate-2"}
            imageURL={
              "/cloudinary/images/v1739456550/356247713-c6ba323a-2e56-4a5d-8830-bb0058818e38_pgeizx.png"
            }
            title={"Dodge Car"}
            description={
              "DodgeCar, un juego interactivo creado en Python utilizando la biblioteca Pygame. En este juego, los jugadores controlan un vehículo que debe esquivar otros vehículos en movimiento, poniendo a prueba sus reflejos y habilidades de coordinación."
            }
            linkRepository={"https://github.com/JorgeNavarroN/Dodge-Car-rep"}
            tecnologias={["python"]}
          />
        </li>
      </ul>
    </section>
  );
}
