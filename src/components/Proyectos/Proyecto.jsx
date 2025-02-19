import Github from "../../assets/icons/GithubIconOg";
import LinkIcon from "../../assets/icons/LinkIcon";
import LinkReference from "../LinkReference";
import { tecnologies } from "../../services/tecnologies.jsx";
import useInitialAnimate from "../../hooks/useInitialAnimate.js";
import { useContext } from "react";
import { ThemeContext } from "../../assets/contexts/ThemeContext.jsx";
import PropTypes from "prop-types";

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
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        ref={ref}
        className={`w-full h-full flex flex-col rounded-[0.75rem] cursor-pointer overflow-hidden border-2 dark:bg-[#121c29] dark:border-[#42566e] border-[#333] drop-shadow-[0_0.313rem_0.625rem_rgb(0,0,0)] hover:rotate-0 transition-all duration-500 ${nameClass} ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="w-full h-10 dark:border-[#42566e] border-[#333] border-b-2 bg-transparent pl-4 flex flex-row items-center gap-3">
          <div className="w-3 h-3 dark:bg-[#42566e] bg-[#333] rounded-full"></div>
          <div className="w-3 h-3 dark:bg-[#42566e] bg-[#333] rounded-full"></div>
          <div className="w-3 h-3 dark:bg-[#42566e] bg-[#333] rounded-full"></div>
        </div>
        <img src={imageURL} alt={title + " Image"} />
      </div>
      <article className="flex flex-col gap-8 dark:text-white text-[#333]">
        <div className="flex flex-col gap-4">
          <h3 className="text-[2rem] font-medium">{title}</h3>
          <p>{description}</p>
        </div>
        <ul className="flex sm:flex-row max-sm:flex-col gap-4">
          {tecnologias.map((tecnologia) => {
            const objTec = tecnologies[tecnologia];
            return <li key={objTec.id}>{objTec.element}</li>;
          })}
        </ul>
        <footer className="grid sm:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-[1.25rem] gap-x-[1.25rem]">
          {linkRepository && (
            <LinkReference href={linkRepository}>
              <Github
                fill={isDarkMode ? "#fff" : "#333"}
                width={32}
                height={32}
              />
              {" Repositorio "}
            </LinkReference>
          )}
          {linkPreview && (
            <LinkReference href={linkPreview}>
              <LinkIcon
                stroke={isDarkMode ? "#fff" : "#333"}
                width={32}
                height={32}
              />
              {" Previsualización "}
            </LinkReference>
          )}
        </footer>
      </article>
    </>
  );
}

Proyecto.propTypes = {
  nameClass: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired,
  linkRepository: PropTypes.string.isRequired,
  linkPreview: PropTypes.string.isRequired,
};
