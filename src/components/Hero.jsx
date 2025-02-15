import { useState } from "react";
import GithubIcon from "../assets/icons/GithubIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import LocationIcon from "../assets/icons/LocationIcon";
import LinkReference from "./LinkReference";
import { useEffect } from "react";
import { useRef } from "react";
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
      <div className="grid items-center gap-y-[20px]">
        <div className="grid grid-cols-[auto_1fr] items-center gap-x-[1rem]">
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
          <p className="col-start-2 text-[18px] font-light tracking-[4px] drop-shadow-[0_5px_7px_rgb(0,0,0)]">
            Técnico en Ingenieria de Software
          </p>
        </div>
        <p className="">
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
