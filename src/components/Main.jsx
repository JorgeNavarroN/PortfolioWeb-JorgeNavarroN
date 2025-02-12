import BriefcaseIcon from "../assets/icons/BriefcaseIcon";

export default function Main() {
  return (
    <section className="overflow-y-auto max-h-screen">
      <div className="flex flex-row items-center gap-8">
        <BriefcaseIcon />
        <h2 className="text-3xl font-medium">Experiencia</h2>
      </div>
      <ol>
        <li>
          <article className="flex flex-col gap-4 relative pb-20">
            <div>
              <div className="rounded-full w-[17px] h-[45px] bg-black blur-[3px] absolute -top-5 right-13 z-10"></div>
              <div className="shadow-[0px_0px_10px_5px] shadow-[#0D5E87] rounded-full w-[17px] h-[17px] bg-[#D9D9D9] absolute top-10 right-13 z-10"></div>
              <div className="w-[1px] min-h-full bg-[#00FFD4] shadow-[0px_0px_2px_1px] shadow-[#0D5E87] absolute right-15 top-0"></div>
            </div>
            <header>
              <h3 className="text-[32px] font-medium">
                Asistente de Control de Calidad
              </h3>
              <p className="text-[24px]">
                Cooperativa de Ahorro y Crédito Santa Isabel
              </p>
              <p className="text-[20px] font-light">
                Noviembre 2024 - Febrero 2025
              </p>
            </header>
            <main className="w-[30rem]">
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li>
                  Ejecución de planes de certificación funcional y no funcional
                  de aplicaciones, validando la documentación y gestionando
                  recursos conforme a metodologías y normativa vigente.
                </li>
                <li>
                  Proponer y ajustar planes de certificación para minimizar
                  riesgos de defectos en aplicaciones.
                </li>
                <li>
                  Revisar el postproducción de pases, asegurando conformidad del
                  solicitante y sin impacto negativo en otros procesos.
                </li>
              </ul>
            </main>
          </article>
        </li>
        <li>
          <article className="flex flex-col gap-4 relative pb-20">
            <div>
              <div className="shadow-[0px_0px_5px_2.5px] shadow-[#E40004] rounded-full w-[9px] h-[9px] bg-[#D9D9D9] absolute top-10 right-14 z-10"></div>
              <div className="w-[1px] min-h-full bg-[#00FFD4] shadow-[0px_0px_2px_1px] shadow-[#0D5E87] absolute right-15 top-0"></div>
            </div>
            <header>
              <h3 className="text-[32px] font-medium">
                Asistente de Control de Calidad
              </h3>
              <p className="text-[24px]">
                Cooperativa de Ahorro y Crédito Santa Isabel
              </p>
              <p className="text-[20px] font-light">
                Noviembre 2024 - Febrero 2025
              </p>
            </header>
            <main className="w-[30rem]">
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li>
                  Ejecución de planes de certificación funcional y no funcional
                  de aplicaciones, validando la documentación y gestionando
                  recursos conforme a metodologías y normativa vigente.
                </li>
                <li>
                  Proponer y ajustar planes de certificación para minimizar
                  riesgos de defectos en aplicaciones.
                </li>
                <li>
                  Revisar el postproducción de pases, asegurando conformidad del
                  solicitante y sin impacto negativo en otros procesos.
                </li>
              </ul>
            </main>
          </article>
        </li>
        <li>
          <article className="flex flex-col gap-4 relative">
            <div>
              <div className="shadow-[0px_0px_5px_2.5px] shadow-[#6FA86D] rounded-full w-[9px] h-[9px] bg-[#D9D9D9] absolute top-10 right-14 z-10"></div>
              <div className="w-[1px] min-h-full bg-[#00FFD4] shadow-[0px_0px_2px_1px] shadow-[#0D5E87] absolute right-15 top-0"></div>
              <div className="w-10 h-10 rounded-full absolute bg-black blur-[5px] -bottom-5 right-10 z-10"></div>
            </div>
            <header>
              <h3 className="text-[32px] font-medium">
                Asistente de Control de Calidad
              </h3>
              <p className="text-[24px]">
                Cooperativa de Ahorro y Crédito Santa Isabel
              </p>
              <p className="text-[20px] font-light">
                Noviembre 2024 - Febrero 2025
              </p>
            </header>
            <main className="w-[30rem]">
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li>
                  Ejecución de planes de certificación funcional y no funcional
                  de aplicaciones, validando la documentación y gestionando
                  recursos conforme a metodologías y normativa vigente.
                </li>
                <li>
                  Proponer y ajustar planes de certificación para minimizar
                  riesgos de defectos en aplicaciones.
                </li>
                <li>
                  Revisar el postproducción de pases, asegurando conformidad del
                  solicitante y sin impacto negativo en otros procesos.
                </li>
              </ul>
            </main>
          </article>
        </li>
      </ol>
    </section>
  );
}
