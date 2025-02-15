import BriefcaseIcon from "../assets/icons/BriefcaseIcon";

export default function Main() {
  return (
    <section id="experiencia-section" className="">
      <div className="flex flex-row items-center gap-8">
        <BriefcaseIcon />
        <h2 className="text-3xl font-medium my-10">Experiencia</h2>
      </div>
      <ol>
        <li className="grid grid-cols-[1fr_auto]">
          <article className="flex flex-col gap-4 relative pb-20">
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
            <main className="">
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
          <div className="relative">
            <div className="w-[2px] min-h-full absolute right-2 top-0 bg-[#00FFD4] -z-10"></div>
            <div className="shadow-[0px_0px_10px_5px] shadow-[#0D5E87] rounded-full w-[18px] h-[18px] bg-[#D9D9D9]"></div>
          </div>
        </li>
        <li className="grid grid-cols-[1fr_auto]">
          <article className="flex flex-col gap-4 relative pb-20">
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
            <main className="">
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
          <div className="relative">
            <div className="w-[18px] h-full bg-transparent">
              <div className="w-[2px] min-h-full bg-[#00FFD4] absolute right-2 top-0 -z-10"></div>
            </div>
            <div className="shadow-[0px_0px_5px_2.5px] shadow-[#E40004] rounded-full w-[10px] h-[10px] bg-[#D9D9D9] absolute right-1 top-0"></div>
          </div>
        </li>
        <li className="grid grid-cols-[1fr_auto]">
          <article className="flex flex-col gap-4 relative pb-20">
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
            <main className="">
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
          <div className="relative">
            <div className="w-[18px] h-full bg-transparent">
              <div className="w-[2px] min-h-full bg-transparent absolute right-2 top-0 bg-gradient-to-b from-[#00FFD4]"></div>
            </div>
            <div className="shadow-[0px_0px_5px_2.5px] shadow-[#6FA86D] rounded-full w-[10px] h-[10px] bg-[#D9D9D9] absolute right-1 top-0"></div>
          </div>
        </li>
      </ol>
    </section>
  );
}
