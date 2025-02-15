import PythonIcon from "../../assets/icons/Python";
import ReactIcon from "../../assets/icons/ReactIcon";
import TailwindCSSIcon from "../../assets/icons/TailwindcssIcon";

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
