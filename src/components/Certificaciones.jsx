import AwardIcon from "../assets/icons/AwardIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCards } from "swiper/modules";
import { useContext } from "react";
import { ThemeContext } from "../assets/contexts/ThemeContext.jsx";

export default function Certificaciones() {
  const { isDarkMode } = useContext(ThemeContext);
  const certificados = [
    {
      id: "v1739710315",
      src: "https://res.cloudinary.com/dl1fugaha/image/upload/v1739710315/course_certificate_JAVA_FUNDAMENTALS_page-0001_tzjfny.jpg",
      alt: "Certificado Java Fundamentals",
    },
    {
      id: "v1739710625",
      src: "https://res.cloudinary.com/dl1fugaha/image/upload/v1739710625/course_certificate_DATABASE_FOUNDATION_page-0001_lml4d6.jpg",
      alt: "Certificado Database Foundations",
    },
    {
      id: "v1739710609",
      src: "https://res.cloudinary.com/dl1fugaha/image/upload/v1739710609/course_certificate_JAVA_FOUNDATIONS_page-0001_z1ixwj.jpg",
      alt: "Java Foundations",
    },
    {
      id: "v1739710617",
      src: "https://res.cloudinary.com/dl1fugaha/image/upload/v1739710617/course_certificate_DATABASE_PROGRAMING_WITH_SQL_page-0001_ghiqzp.jpg",
      alt: "Database Programming with SQL",
    },
  ];

  return (
    <section className="col-span-2 grid grid-cols-1 gap-8 dark:text-white text-[#333]">
      <div className="flex flex-row items-center gap-8">
        <AwardIcon stroke={isDarkMode ? "#fff" : "#333"} />
        <h2 className="text-3xl font-medium">Certificaciones</h2>
      </div>
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
