import useInitialAnimate from "../hooks/useInitialAnimate";

export default function Puesto({
  workstation,
  company,
  startDate,
  endDate,
  children,
  isLast = false,
}) {
  const { isVisible, ref } = useInitialAnimate();
  return (
    <>
      <article ref={ref} className={`dark:text-white text-[#333] flex flex-col gap-4 relative pb-20 transition-all ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20" }`}>
        <header className="">
          <h3 className="text-[2rem] font-medium">{workstation}</h3>
          <p className="text-[1.5rem]">{company}</p>
          <p className="text-[1.25rem] font-light">
            {`${startDate} - ${endDate}`}
          </p>
        </header>
        <main className="">
          <ul className="list-disc list-inside flex flex-col gap-4">
            {children}
          </ul>
        </main>
      </article>
      {isLast ? (
        <div className="relative">
          <div className="w-[1.125rem] h-full bg-transparent">
            <div className="w-[0.125rem] min-h-full bg-transparent absolute right-2 top-0 bg-gradient-to-b dark:from-[#00FFD4] from-[#333]"></div>
          </div>
          <div className="shadow-[0_0_0.313rem_0.156rem] dark:shadow-[#0D5E87] shadow-[#333] rounded-full w-[1.125rem] h-[1.125rem] dark:bg-[#D9D9D9] bg-[#333] absolute top-0"></div>
        </div>
      ) : (
        <div className="relative">
          <div className="w-[0.125rem] min-h-full absolute right-2 top-0 dark:bg-[#00FFD4] bg-[#333] -z-10"></div>
          <div className="shadow-[0_0_0.313rem_0.156rem] dark:shadow-[#0D5E87] shadow-[#333] rounded-full w-[1.125rem] h-[1.125rem] dark:bg-[#D9D9D9] bg-[#333]"></div>
        </div>
      )}
    </>
  );
}
