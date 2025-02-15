import {
  PythonTec,
  ReactTec,
  TailwindCSSTec,
} from "../components/Tecnologias/Tecnologias";

export const tecnologies = {
  python: { id: 12345, element: (() => <PythonTec />)() },
  tailwindcss: { id: 12346, element: (() => <TailwindCSSTec />)() },
  react: { id: 12347, element: (() => <ReactTec />)() },
};
