import UserCheckIcon from "../assets/icons/UserCheckIcon";
import useInitialAnimate from "../hooks/useInitialAnimate";

export default function SobreMi() {
  const { isVisible: isVisible1, ref: ref1 } = useInitialAnimate();
  const { isVisible: isVisible2, ref: ref2 } = useInitialAnimate();
  const { isVisible: isVisible3, ref: ref3 } = useInitialAnimate();

  return (
    <section id="sobremi-section" className="col-span-2 grid grid-cols-1 gap-8">
      <div className="flex flex-row items-center gap-8">
        <UserCheckIcon />
        <h2 className="text-3xl font-medium my-10">Sobre mí</h2>
      </div>
      <main>
        <article className="grid grid-cols-[auto_1fr] items-center gap-20">
          {/* <div className="relative">
            <div className="w-[300px] h-[300px] bg-gray-500 rounded-2xl opacity-30"></div>
          </div> */}
          <div className="relative">
            <img
              ref={ref1}
              width={300}
              height={300}
              className={`rounded-xl transition-all duration-[1500ms] drop-shadow-[0_5px_10px_rgb(0,0,0)] ${
                isVisible1
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              src="https://github.com/JorgeNavarroN.png"
              alt="Jorge Navarro 😎"
            />
            <div
              ref={ref2}
              className={`w-[300px] h-[300px] duration-[1000ms] bg-[#170b33] rounded-xl absolute top-4 -right-4 -z-10 drop-shadow-[0_5px_10px_rgb(0,0,0)] ${
                isVisible2
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            ></div>
            <div
              ref={ref3}
              className={`w-[300px] h-[300px] duration-[500ms] bg-[#11031d] rounded-xl absolute top-8 -right-8 -z-20 drop-shadow-[0_5px_10px_rgb(0,0,0)] ${
                isVisible3
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            ></div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl">
              Lorem ipsum dolor sit amet Et est sit sanctus duo amet no sit kasd
              sanctus stet lorem tation ad ea lorem et clita. Sed justo sed
              magna dolore tempor stet vero. Ut imperdiet dolore takimata
              blandit tempor eirmod consequat sit stet ut. Clita vel enim diam.
              Commodo at gubergren exerci gubergren diam ullamcorper lorem ea.
            </p>
            <p className="text-xl">
              Ut imperdiet dolore takimata blandit tempor eirmod consequat sit
              stet ut. Clita vel enim diam. Commodo at gubergren exerci
              gubergren diam ullamcorper lorem ea.
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit amet Et est sit sanctus duo amet no sit kasd
              sanctus stet lorem tation ad ea lorem et clita.
            </p>
          </div>
        </article>
      </main>
    </section>
  );
}
