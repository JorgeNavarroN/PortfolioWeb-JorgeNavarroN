import { useRef } from "react";
import Github from "../../assets/icons/GithubIconOg";
import LinkIcon from "../../assets/icons/LinkIcon";
import LinkReference from "../LinkReference";
import { useEffect } from "react";
import { useState } from "react";
import { tecnologies } from "../../services/tecnologies.jsx";
import useInitialAnimate from "../../hooks/useInitialAnimate.js";

export default function Proyecto({
  nameClass,
  imageURL,
  title,
  description,
  tecnologias,
  linkRepository,
  linkPreview,
}) {
  const { isVisible, ref } = useInitialAnimate();
  return (
    <>
      <div
        ref={ref}
        className={`w-full h-full rounded-[12px] cursor-pointer overflow-hidden border-2 bg-[#121c29] border-[#42566e] drop-shadow-[0_5px_10px_rgb(0,0,0)] hover:rotate-0 transition-all duration-500 ${nameClass} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="w-full h-10 border-[#42566e] border-b-2 bg-transparent pl-4 flex flex-row items-center gap-3">
          <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
          <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
          <div className="w-3 h-3 bg-[#42566e] rounded-full"></div>
        </div>
        <img src={imageURL} alt={title + " Image"} />
      </div>
      <article className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h3 className="text-[2rem] font-medium">{title}</h3>
          <p>{description}</p>
        </div>
        <ul className="flex flex-row gap-4">
          {tecnologias.map((tecnologia) => {
            const objTec = tecnologies[tecnologia];
            return <li key={objTec.id}>{objTec.element}</li>;
          })}
        </ul>
        <footer className="grid grid-cols-2 gap-x-[1.25rem]">
          {linkRepository && (
            <LinkReference href={linkRepository}>
              <Github width={32} height={32} />
              {" Repositorio "}
            </LinkReference>
          )}
          {linkPreview && (
            <LinkReference href={linkPreview}>
              <LinkIcon width={32} height={32} />
              {" Previsualización "}
            </LinkReference>
          )}
        </footer>
      </article>
    </>
  );
}
