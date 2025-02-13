import UserCheckIcon from "../assets/icons/UserCheckIcon";

export default function SobreMi() {
  return (
    <section className="col-span-2 grid grid-cols-1 gap-8">
      <div className="flex flex-row items-center gap-8">
        <UserCheckIcon />
        <h2 className="text-3xl font-medium">Sobre mí</h2>
      </div>
      <main>
        <article className="grid grid-cols-[auto_1fr] items-center gap-20">
          {/* <div className="relative">
            <div className="w-[300px] h-[300px] bg-gray-500 rounded-2xl opacity-30"></div>
          </div> */}
          <div className="relative">
            <img
              width={300}
              height={300}
              className="rounded-xl drop-shadow-[0_5px_10px_rgb(0,0,0)]"
              src="https://github.com/JorgeNavarroN.png"
              alt="Jorge Navarro 😎"
            />
            <div className="w-[300px] h-[300px] bg-[#170b33] rounded-2xl absolute top-4 -right-4 -z-10 drop-shadow-[0_5px_10px_rgb(0,0,0)]"></div>
            <div className="w-[300px] h-[300px] bg-[#11031d] rounded-2xl absolute top-8 -right-8 -z-20 drop-shadow-[0_5px_10px_rgb(0,0,0)]"></div>
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
