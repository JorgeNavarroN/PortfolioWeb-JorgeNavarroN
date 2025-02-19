import AwardIcon from "../assets/icons/AwardIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCards } from "swiper/modules";
import { useContext } from "react";
import { ThemeContext } from "../assets/contexts/ThemeContext.jsx";
import PropTypes from "prop-types";

export default function Certificaciones({ certificados }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="certificaicones-section" className="col-span-2 grid grid-cols-1 gap-8 dark:text-white text-[#333] my-10">
      <header className="flex flex-row items-center gap-8">
        <AwardIcon stroke={isDarkMode ? "#fff" : "#333"} />
        <h2 className="text-3xl font-medium">Certificaciones</h2>
      </header>
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="lg:w-[50rem] md:w-[45rem] sm:w-[35rem] max-sm:w-[20rem]"
      >
        {certificados.map((cert) => (
          <SwiperSlide key={cert.id} className="flex">
            <img
              src={cert.src}
              alt={cert.alt}
              className="w-full h-auto shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

Certificaciones.propTypes = {
  certificados: PropTypes.arrayOf(PropTypes.object).isRequired,
};
