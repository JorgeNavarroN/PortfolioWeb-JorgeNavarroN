import GithubIcon from "../assets/icons/GithubIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import LinkReference from "./LinkReference";
import useInitialAnimate from "../hooks/useInitialAnimate";

export default function Hero() {
  const { isVisible, ref } = useInitialAnimate();

  return (
    <section
      ref={ref}
      className={`z-10 h-full my-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="grid items-center gap-y-[1.25rem]">
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-[1rem]">
          <img
            className="rounded-full sm:row-span-2 max-sm:col-span-2"
            width={82}
            height={82}
            src="https://media.licdn.com/dms/image/v2/D4E03AQH6ljtRcQjfIg/profile-displayphoto-shrink_800_800/B4EZSFQTnIGcAg-/0/1737402432866?e=1744848000&v=beta&t=Sf_Ndq-_FVriR1ndkx2tUNggpUZZiYD77LH1eyJrSyk"
            alt="Foto Jorge Navarro Nuñez 🤓"
          />
          <h1 className="md:col-start-2 text-[2.5rem] font-medium dark:text-white text-[#010208]">
            Jorge Navarro Nuñez
          </h1>
          <p className="xl:col-start-2 lg:col-start-1 sm:col-span-2 max-sm:col-span-2 text-[1.125rem] font-light tracking-[0.25rem] drop-shadow-[0_0.313rem_0.438rem_rgb(0,0,0)] dark:text-white text-[#010208]">
            Técnico en Ingenieria de Software
          </p>
        </div>
        <p className="text-xl dark:text-white text-[#010208]">
          Desarrollador de software junior.
          Busco aportar con mis conocimientos y proponer <strong className="font-bold text-[#00c3ff]">soluciones innovadoras </strong>
          en la industria tecnológica.
        </p>
        <div className="flex flex-row items-center gap-5">
          <LocationIcon fill="#FEF7FF" />
          <h3 className="text-2xl dark:text-white text-[#010208]">Perú</h3>
          <img
            src="https://flagsapi.com/PE/flat/32.png"
            alt="Bandera del Perú"
          />
        </div>
        <div className="grid grid-cols-2 max-sm:flex max-sm:flex-col gap-8">
          <LinkReference href={"https://www.linkedin.com/in/jorgenavarron/"}>
            <LinkedInIcon />
            LinkedIn
          </LinkReference>
          <LinkReference
            href={"https://github.com/JorgeNavarroN?tab=repositories"}
          >
            <GithubIcon />
            GitHub
          </LinkReference>
        </div>
      </div>
    </section>
  );
}
