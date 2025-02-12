import GithubIcon from "../assets/icons/GithubIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import LocationIcon from "../assets/icons/LocationIcon";

export default function Hero() {
  return (
    <section className="z-10">
      <div className="grid place-content-center items-center gap-y-[20px] sticky">
        <div className="grid place-content-center items-center gap-x-[20px]">
          <img
            className="row-span-2 rounded-full"
            width={82}
            height={82}
            src="https://media.licdn.com/dms/image/v2/D4E03AQH6ljtRcQjfIg/profile-displayphoto-shrink_800_800/B4EZSFQTnIGcAg-/0/1737402432866?e=1744848000&v=beta&t=Sf_Ndq-_FVriR1ndkx2tUNggpUZZiYD77LH1eyJrSyk"
            alt=""
          />
          <h1 className="col-start-2 text-[40px] font-medium">
            Jorge Navarro Nuñez
          </h1>
          <p className="col-start-2 text-[18px] font-light tracking-[4px]">
            Técnico en Ingenieria de Software
          </p>
        </div>
        <p className="w-[30rem]">
          Apasionado por el desarrollo de software en constante aprendizaje.
          Busco aportar con mis conocimientos y proponer soluciones innovadoras
          en la industria tecnológica.
        </p>
        <div className="flex flex-row items-center gap-5">
          <LocationIcon />
          <h3 className="text-2xl">Perú</h3>
          <img
            src="https://flagsapi.com/PE/flat/32.png"
            alt="Bandera del Perú"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <a href="" className="flex flex-row items-center justify-center gap-2 py-1 bg-transparent border-3 rounded-full text-xl">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href="" className="flex flex-row items-center justify-center gap-2 py-1 bg-transparent border-3 rounded-full text-xl">
            <GithubIcon />
            Github
          </a>
        </div>
      </div>
    </section>
  );
}
