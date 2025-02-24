import "./App.css";
import Certificaciones from "./components/Certificaciones.jsx";
import Hero from "./components/Hero.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Proyectos from "./components/Proyectos.jsx";
import SobreMi from "./components/SobreMi.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const certificados = [
  {
    id: "v1739997489",
    src: "/cloudinary/images/v1739997489/Python_Essentials_2_Badge20230709-28-exiej0_page-0001_qkclhp.jpg",
    alt: "Python Essentials 2",
  },
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
  return (
    <div className="dark:bg-[#010208] relative bg-[#eeeff5] min-h-screen overflow-hidden text-white">
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[5rem] h-[31.25rem] -rotate-[25deg] left-[9.375rem] -top-[5.938rem] blur-[3.625rem] animate-[pulse_2s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[7.5rem] h-[50rem] -rotate-[45deg] left-[18.75rem] -top-[11.563rem] blur-[3.625rem] animate-[pulse_3s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r dark:from-[#3f89ad] absolute w-[31.25rem] h-[5rem] rotate-[25deg] left-[4.688rem] top-[3.125rem] blur-[3.625rem] animate-[pulse_1s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[5rem] h-[23.125rem] -rotate-[25deg] left-[53.125rem] -top-[5.938rem] blur-[3.625rem] animate-[pulse_1.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-b dark:from-[#3f89ad] absolute w-[7.5rem] h-[25rem] -rotate-[45deg] left-[43.75rem] -top-[11.563rem] blur-[3.625rem] animate-[pulse_3.5s_ease-in-out_infinite]"></div>
      <div className="bg-gradient-to-r dark:from-[#3f89ad] absolute w-[31.25rem] h-[5rem] rotate-[25deg] left-[24.688rem] top-[3.125rem] blur-[3.625rem] animate-[pulse_2.5s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-tr dark:from-[#3f89ad] rounded-full absolute w-[31.25rem] h-[62.5rem] top-[62.5rem] -left-56 blur-[12.5rem] animate-[pulse_3.8s_ease-in-out_infinite]"></div>

      <div className="bg-gradient-to-r dark:from-[#3f89ad] rounded-full absolute w-[50rem] h-[31.25rem] top-[193.75rem] blur-[12.5rem] animate-[pulse_4s_ease-in-out_infinite]"></div>

      <div className="grid grid-cols-1 xl:w-[75rem] xl:min-w-[75rem] lg:w-[60rem] lg:min-w-[60rem] md:w-[45rem] md:min-w-[45rem] sm:w-[35rem] sm:min-w-[35rem] max-sm:w-[20rem] max-sm:min-w-[20rem] mx-auto gap-y-25">
        {/* HEADER */}
        <Header />

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
        <Footer />
      </div>
    </div>
  );
}

export default App;
