import "./App.css";
import FolderIcon from "./assets/icons/FolderIcon.jsx";
import Github from "./assets/icons/GithubIconOg.jsx";
import LinkIcon from "./assets/icons/LinkIcon.jsx";
import PythonIcon from "./assets/icons/Python.jsx";
import ReactIcon from "./assets/icons/ReactIcon.jsx";
import TailwindCSSIcon from "./assets/icons/TailwindcssIcon.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden text-white">
      <div className="bg-[#1b3d4e] absolute w-[400px] h-[550px] -rotate-45 -top-60 left-0 blur-3xl rounded-full"></div>
      <div className="bg-[#0a1a22] absolute w-[450px] h-[450px] -rotate-45 top-10 left-50 blur-3xl rounded-full"></div>
      <div className="bg-[#3f89ad] absolute w-[118.69px] h-[300.72px] -rotate-45 -top-25 left-55 blur-2xl"></div>
      <div className="bg-[#396e88] absolute w-[75.82px] h-[848.29px] -rotate-45 -top-120 left-10 blur-3xl"></div>
      <div className="bg-[#3f89ad] absolute w-[118.69px] h-[186.07px] -rotate-45 top-25 left-90 blur-3xl"></div>
      <div className="grid grid-cols-1 w-[1200px] min-w-[1200px] mx-auto">
        <header className="col-span-2 grid place-content-center h-24 z-10">
          <nav>
            <ul className="flex gap-4">
              <li>Experiencia</li>
              <li>Proyectos</li>
              <li>Sobre mí</li>
              <li>Contactame</li>
            </ul>
          </nav>
        </header>

        <main className="z-10 grid grid-cols-2">
          {/* HERO */}
          <Hero />

          {/* MAIN */}
          <Main />

          {/* EXTRA */}
          <section className="col-span-2 row-start-2">
            <div className="flex flex-row items-center gap-8 py-[4rem]">
              <FolderIcon />
              <h2 className="text-3xl font-medium">Proyectos</h2>
            </div>
            <ul className="flex flex-col gap-20">
              <li className="grid grid-cols-2 gap-8">
                <div className="w-[510px] h-[288px] rounded-[12px] overflow-hidden border-3">
                  <div className="w-full h-10 border-b-3 bg-transparent pl-3 flex flex-row items-center gap-3">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <img
                    src="https://private-user-images.githubusercontent.com/78452601/360226414-14d48934-c090-42cb-acef-335aad935a28.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkzMTAxMDEsIm5iZiI6MTczOTMwOTgwMSwicGF0aCI6Ii83ODQ1MjYwMS8zNjAyMjY0MTQtMTRkNDg5MzQtYzA5MC00MmNiLWFjZWYtMzM1YWFkOTM1YTI4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjExVDIxMzY0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTU2MWEyNDI4ZTVhNDJiNzdiNjFmZGRmMmUyZTdjMzQ5YjUyMjhkZWJlNTIyZWNkNjFhMTQyMzA4MDAyYTAyZmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.u2vtyNhwLWkmR3s8X3hTEBCtiP3yQNoIefcXnbCnIvE"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-[2rem] font-medium">Real Time Weather</h3>
                  <p>
                    Aplicación web para visualizar el clima actual y los
                    pronosticos para los 5 dias posteriores de diferentes
                    ciudades, incluyendo la ubicación actual. Utilizando React y
                    Tailwindcss, con conexion a la API de OpenWeatherMap.
                  </p>
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
                </div>
              </li>
              <li className="grid grid-cols-2 gap-8">
                <div className="w-[510px] h-[288px] rounded-[12px] overflow-hidden border-3">
                  <div className="w-full h-10 border-b-3 bg-transparent pl-3 flex flex-row items-center gap-3">
                    <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <img
                    src="https://private-user-images.githubusercontent.com/78452601/356247713-c6ba323a-2e56-4a5d-8830-bb0058818e38.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkzMTc4MTYsIm5iZiI6MTczOTMxNzUxNiwicGF0aCI6Ii83ODQ1MjYwMS8zNTYyNDc3MTMtYzZiYTMyM2EtMmU1Ni00YTVkLTg4MzAtYmIwMDU4ODE4ZTM4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMjExVDIzNDUxNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjZThlMWQzMzE2NDhlMWM5ZjRmMDBkMTE1NmE2ZTRlZjNlNTc2MWIwYTJmYWIzZmQ5MjRhYmYwZTJkNjI5MjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.FW4IG7iTUjjVAFOtraVbRbsrTCBdicJ9MgFyFqx2fqE"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-[2rem] font-medium">Dodge Car</h3>
                  <p>
                    Juego 2D de un auto en una carretera donde debes esquivar el
                    tráfico. Realizado con Python, utilizando la librería
                    PyGame.
                  </p>
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
        </main>

        {/* FOOTER */}
        <footer className="col-span-2 grid place-content-center h-24"></footer>
      </div>
    </div>
  );
}

export default App;
