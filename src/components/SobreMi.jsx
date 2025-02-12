import UserCheckIcon from "../assets/icons/UserCheckIcon";

export default function SobreMi() {
  return (
    <section className="col-span-2">
      <div className="flex flex-row items-center gap-8 py-[4rem]">
        <UserCheckIcon />
        <h2 className="text-3xl font-medium">Sobre mí</h2>
      </div>
      <main>
        <article className="grid grid-cols-[auto_1fr] place-self-center gap-10">
          <div className="relative">
            <img
              width={300}
              height={300}
              className="transform-3d absolute z-10 rounded-2xl"
              src="https://github.com/JorgeNavarroN.png"
              alt="Jorge Navarro 😎"
              style={{
                transform: "rotateX(30deg) rotateY(-4.99492deg) rotateZ(15deg)",
              }}
            />
            <div className="w-[300px] h-[300px] bg-gray-500 rounded-2xl opacity-30"></div>
          </div>
          <div className="flex flex-col gap-4 w-[720px] object-cover inset-[50%_0_0_0]">
            <p>
              Lorem ipsum dolor sit amet Et est sit sanctus duo amet no sit kasd
              sanctus stet lorem tation ad ea lorem et clita. Sed justo sed
              magna dolore tempor stet vero. Ut imperdiet dolore takimata
              blandit tempor eirmod consequat sit stet ut. Clita vel enim diam.
              Commodo at gubergren exerci gubergren diam ullamcorper lorem ea.
            </p>
            <p>
              Lorem ipsum dolor sit amet Et est sit sanctus duo amet no sit kasd
              sanctus stet lorem tation ad ea lorem et clita. Sed justo sed
              magna dolore tempor stet vero. Ut imperdiet dolore takimata
              blandit tempor eirmod consequat sit stet ut. Clita vel enim diam.
              Commodo at gubergren exerci gubergren diam ullamcorper lorem ea.
            </p>
            <p>
              Lorem ipsum dolor sit amet Et est sit sanctus duo amet no sit kasd
              sanctus stet lorem tation ad ea lorem et clita. Sed justo sed
              magna dolore tempor stet vero. Ut imperdiet dolore takimata
              blandit tempor eirmod consequat sit stet ut. Clita vel enim diam.
              Commodo at gubergren exerci gubergren diam ullamcorper lorem ea.
            </p>
          </div>
        </article>
      </main>
    </section>
  );
}
