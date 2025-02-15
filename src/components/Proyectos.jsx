import FolderIcon from "../assets/icons/FolderIcon";
import Proyecto from "./Proyectos/Proyecto";

export default function Proyectos() {
  return (
    <section
      id="proyectos-section"
      className="col-span-2 row-start-2 grid grid-cols-1 gap-8 my-10"
    >
      <div className="flex flex-row items-center gap-8">
        <FolderIcon />
        <h2 className="text-3xl font-medium my-10">Proyectos</h2>
      </div>
      <ul className="flex flex-col gap-20">
        <li className="grid grid-cols-2 gap-20">
          <Proyecto
            nameClass={"-rotate-2"}
            imageURL={
              "https://res.cloudinary.com/dl1fugaha/image/upload/v1739463920/360226414-14d48934-c090-42cb-acef-335aad935a28_txjb1d.png"
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
        <li className="grid grid-cols-2 gap-20">
          <Proyecto
            nameClass={"rotate-2"}
            imageURL={
              "https://res.cloudinary.com/dl1fugaha/image/upload/v1739456550/356247713-c6ba323a-2e56-4a5d-8830-bb0058818e38_pgeizx.png"
            }
            title={"Dodge Car"}
            description={
              "Juego 2D de un auto en una carretera donde debes esquivar el tráfico. Realizado con Python, utilizando la librería PyGame."
            }
            linkRepository={"https://github.com/JorgeNavarroN/Dodge-Car-rep"}
            tecnologias={["python"]}
          />
        </li>
      </ul>
    </section>
  );
}
