export default function Footer() {
  return (
    <footer className="col-span-2 grid md:grid-cols-2 md:place-self-center md:items-center my-10
     sm:flex-col sm:text-center max-sm:text-center sm:gap-8 max-sm:gap-8">
      <ul className="flex md:flex-row max-sm:flex-col sm:flex-col gap-8">
        <li>
          <a
            className="dark:text-white text-[#010208]"
            target="_blank"
            href="https://www.linkedin.com/in/jorgenavarron/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="dark:text-white text-[#010208]"
            target="_blank"
            href="https://github.com/JorgeNavarroN"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="dark:text-white text-[#010208]"
            href="mailto:jorgenavarron4082@outlook.com"
          >
            Contactamé
          </a>
        </li>
      </ul>
      <small className="dark:text-white text-[#010208]">
        © 2025 Jorge Navarro Núñez. Todos los derechos reservados.
      </small>
    </footer>
  );
}
