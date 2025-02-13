import FolderIcon from "../assets/icons/FolderIcon";
import Github from "../assets/icons/GithubIconOg";
import LinkIcon from "../assets/icons/LinkIcon";
import PythonIcon from "../assets/icons/Python";
import ReactIcon from "../assets/icons/ReactIcon";
import TailwindCSSIcon from "../assets/icons/TailwindcssIcon";

export default function Proyectos() {
  return (
    <section className="col-span-2 row-start-2 grid grid-cols-1 gap-8">
      <div className="flex flex-row items-center gap-8">
        <FolderIcon />
        <h2 className="text-3xl font-medium">Proyectos</h2>
      </div>
      <ul className="flex flex-col gap-20">
        <li className="grid grid-cols-2 gap-20">
          <div className="w-full h-full rounded-[12px] overflow-hidden border-2 bg-[#121c29] border-[#42566e] drop-shadow-[0_10px_10px_rgb(0,0,0)]">
            <div className="w-full h-10 border-[#42566e] border-b-2 bg-transparent pl-4 flex flex-row items-center gap-3">
              <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
            </div>
            <img
              src="https://res.cloudinary.com/dl1fugaha/image/upload/v1739463920/360226414-14d48934-c090-42cb-acef-335aad935a28_txjb1d.png"
              alt=""
            />
          </div>
          <article className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[2rem] font-medium">Real Time Weather</h3>
              <p>
                Aplicación web para visualizar el clima actual y los pronosticos
                para los 5 dias posteriores de diferentes ciudades, incluyendo
                la ubicación actual. Utilizando React y Tailwindcss, con
                conexion a la API de OpenWeatherMap.
              </p>
            </div>
            <ul className="flex flex-row gap-4">
              <li>
                <div className="flex flex-row items-center gap-2">
                  <ReactIcon width={32} height={32} />
                  <span className="text-2xl">React</span>
                </div>
              </li>
              <li>
                <div className="flex flex-row items-center gap-2">
                  <TailwindCSSIcon width={32} height={32} />
                  <span className="text-2xl">Tailwind CSS</span>
                </div>
              </li>
            </ul>
            <footer className="grid grid-cols-2 gap-x-[1.25rem]">
              <a
                className="flex flex-row gap-4 items-center border-2 rounded-full justify-center py-1 text-[18px]"
                href=""
              >
                <Github width={32} height={32} />
                {" Repositorio "}
              </a>
              <a
                className="flex flex-row gap-4 items-center border-2 rounded-full justify-center py-1 text-[18px]"
                href=""
              >
                <LinkIcon />
                {" Previsualización "}
              </a>
            </footer>
          </article>
        </li>
        <li className="grid grid-cols-2 gap-20">
          <div className="w-full h-full rounded-[12px] overflow-hidden border-2 bg-[#121c29] border-[#42566e] drop-shadow-[0_10px_10px_rgb(0,0,0)]">
            <div className="w-full h-10 border-[#42566e] border-b-2 bg-transparent pl-4 flex flex-row items-center gap-3">
              <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
            </div>
            <img
              src="https://res.cloudinary.com/dl1fugaha/image/upload/v1739456550/356247713-c6ba323a-2e56-4a5d-8830-bb0058818e38_pgeizx.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[2rem] font-medium">Dodge Car</h3>
              <p>
                Juego 2D de un auto en una carretera donde debes esquivar el
                tráfico. Realizado con Python, utilizando la librería PyGame.
              </p>
            </div>
            <ul className="flex flex-row gap-4">
              <li>
                <div className="flex flex-row items-center gap-2">
                  <PythonIcon width={32} height={32} />
                  <span className="text-2xl">Python</span>
                </div>
              </li>
            </ul>
            <footer className="grid grid-cols-2 gap-x-[1.25rem]">
              <a
                className="flex flex-row gap-4 items-center border-2 rounded-full justify-center py-1 text-[18px]"
                href=""
              >
                <Github width={32} height={32} />
                {" Repositorio "}
              </a>
              <a
                className="flex flex-row gap-4 items-center border-2 rounded-full justify-center py-1 text-[18px]"
                href=""
              >
                <LinkIcon />
                {" Previsualización "}
              </a>
            </footer>
          </div>
        </li>
      </ul>
    </section>
  );
}
