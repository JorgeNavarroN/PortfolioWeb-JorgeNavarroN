import "./App.css";
import Certificaciones from "./components/Certificaciones.jsx";
import Hero from "./components/Hero.jsx";
import Main from "./components/Main.jsx";
import Proyectos from "./components/Proyectos.jsx";
import SobreMi from "./components/SobreMi.jsx";

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
          <Proyectos />

          <Certificaciones />

          <SobreMi />
        </main>

        {/* FOOTER */}
        <footer className="col-span-2 grid grid-cols-2 place-self-center items-center h-24">
          <ul className="flex flex-row gap-8">
            <li><a href="">LinkedIn</a></li>
            <li><a href="">GitHub</a></li>
            <li><a href="">Contactamé</a></li>
          </ul>
          <small>© 2025 Jorge Navarro Núñez. Todos los derechos reservados.</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
