import {
  CSSTec,
  HTMLTec,
  JavaScriptTec,
  PythonTec,
  ReactTec,
  TailwindCSSTec,
} from "../components/Tecnologias";

export const tecnologies = {
  python: { id: 12345, element: (() => <PythonTec />)() },
  tailwindcss: { id: 12346, element: (() => <TailwindCSSTec />)() },
  react: { id: 12347, element: (() => <ReactTec />)() },
  html: { id: 12348, element: (() => <HTMLTec />)() },
  css: { id: 12349, element: (() => <CSSTec />)() },
  javascript: { id: 12350, element: (() => <JavaScriptTec />)() },
};
