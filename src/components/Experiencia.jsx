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
            workstation={"Desarrollador FullStack Jr."}
            company={"Code Global"}
            startDate={"Marzo 2025"}
            endDate={"Actualmente"}
          >
            <li>
              Desarrollé interfaces dinámicas y responsivas utilizando Angular
              17+ y componentes avanzados de PrimeNG.
            </li>
            <li>Implementé módulos de Producción y Renta de Vehiculos.</li>
            <li>
              Diseñé y desarrollé servicios RESTful utilizando NestJS,
              conectando con bases de datos SQL según requerimientos del
              negocio.
            </li>
            <li>
              Integré validaciones tanto en frontend como backend, asegurando la
              integridad de los datos y mejor experiencia del usuario.
            </li>
            <li>
              Uso de Prisma para modelado de datos y manejo de entidades en
              NestJS.
            </li>
            <li>
              Contribuí al desarrollo de módulos clave del ERP, mejorando la
              eficiencia operativa de áreas como logística y recursos humanos.
            </li>
            <li>
              Participación activa en reuniones con el cliente para
              levantamiento de requerimientos, validación funcional y
              seguimiento del proyecto.
            </li>
          </Puesto>
        </li>
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
