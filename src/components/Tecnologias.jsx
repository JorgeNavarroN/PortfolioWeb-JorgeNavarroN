import { CSSIcon, HTMLIcon, JavaScriptIcon, PythonIcon, ReactIcon, TailwindCSSIcon } from "./Icons";

export function PythonTec() {
  return (
    <div className="flex flex-row items-center gap-2">
      <PythonIcon width={32} height={32} />
      <span className="text-2xl">Python</span>
    </div>
  );
}

export function ReactTec() {
  return (
    <div className="flex flex-row items-center gap-2">
      <ReactIcon width={32} height={32} />
      <span className="text-2xl">React</span>
    </div>
  );
}

export function TailwindCSSTec() {
  return (
    <div className="flex flex-row items-center gap-2">
      <TailwindCSSIcon width={32} height={32} />
      <span className="text-2xl">Tailwind CSS</span>
    </div>
  );
}

export function HTMLTec() {
  return (
    <div className="flex flex-row items-center gap-2">
      <HTMLIcon width={32} height={32} />
      <span className="text-2xl">HTML</span>
    </div>
  );
}

export function CSSTec() {
  return (
    <div className="flex flex-row items-center gap-2">
      <CSSIcon width={32} height={32} />
      <span className="text-2xl">CSS</span>
    </div>
  );
}

export function JavaScriptTec() {
  return (
    <div className="flex flex-row items-center gap-2">
      <JavaScriptIcon width={32} height={32} />
      <span className="text-2xl">JavaScript</span>
    </div>
  );
}
