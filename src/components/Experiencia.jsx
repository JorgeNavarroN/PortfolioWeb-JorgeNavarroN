import { useContext } from "react";
import Puesto from "./Puesto";
import { ThemeContext } from "../assets/contexts/ThemeContext";
import { BriefcaseIcon } from "./Icons";

export default function Experiencia() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="experiencia-section" className="max-sm:col-start-1">
      <header className="flex flex-row sm:items-center sm:gap-8 max-sm:flex-col">
        <BriefcaseIcon stroke={isDarkMode ? "#fff" : "#333"} />
        <h2 className="text-3xl font-medium my-10 dark:text-white text-[#333]">
          Experiencia Pre - Profesional
        </h2>
      </header>
      <ol>
        <li className="grid grid-cols-[1fr_auto]">
          <Puesto
            workstation={"Practicante de Desarrollo de Software"}
            company={"Hospital de Apoyo II - 1 Nuestra Señora de Las Mercedes"}
            startDate={"Agosto 2023"}
            endDate={"Junio 2024"}
          >
            <li>
              Desarrollo e implementación de Sistema de Gestión de Colas
              utilizando Java 8.
            </li>
            <li>
              Implementación de Conexión TCP/IP utilizando Sockets para la
              comunicación entre dispositivos.
            </li>
            <li>Manejo de base de datos SQL Server.</li>
            <li>
              Creación y modificación de procedimientos almacenados en SQL.
            </li>
            <li>Operaciones CRUD para bases de datos SQL.</li>
            <li>
              Manejo de git para el control de versiones y GitHub para el
              repositorio del proyecto.
            </li>
          </Puesto>
        </li>
        <li className="grid grid-cols-[1fr_auto]">
          <Puesto
            workstation={"Practicante de Desarrollo de Software"}
            company={"JL Inversiones y Negocios E.I.R.L"}
            startDate={"Febrero 2023"}
            endDate={"Junio 2023"}
            isLast
          >
            <li>
              Desarrollé un chatbot asistente con integración de la API de Meta.
            </li>
            <li>
              Utilicé Node.js como tecnología principal para el Desarrollo.
            </li>
            <li>
              Manejo de git para el control de versiones y GitHub para el
              repositorio del proyecto.
            </li>
            <li>
              Desarrollé y gestioné un mock utilizando JSON para simular datos
              de una API, lo que incluyó la creación, implementación y consumo
              de archivos JSON.
            </li>
          </Puesto>
        </li>
      </ol>
    </section>
  );
}
