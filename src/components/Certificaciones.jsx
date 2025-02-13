import AwardIcon from "../assets/icons/AwardIcon";

export default function Certificaciones() {
  return (
    <section className="col-span-2 grid grid-cols-1 gap-8">
      <div className="flex flex-row items-center gap-8">
        <AwardIcon />
        <h2 className="text-3xl font-medium">
          Certificaciones
        </h2>
      </div>
      <ul className="grid grid-cols-2 gap-20">
        <li>
          <div className="grid place-content-center bg-white w-full h-[300px] rounded-[12px] overflow-hidden drop-shadow-[0_5px_10px_rgb(0,0,0)]">
            <img
              src="https://res.cloudinary.com/dl1fugaha/image/upload/v1739372536/Cisco-Networking_logo_hetbn8.jpg"
              alt="Cisco Networking Logo"
            />
          </div>
        </li>
        <li>
          <div className="grid place-content-center bg-white w-full h-[300px] rounded-[12px] overflow-hidden drop-shadow-[0_5px_10px_rgb(0,0,0)]">
            <img
              src="https://res.cloudinary.com/dl1fugaha/image/upload/v1739372536/Oracle-Academy_logo_tuohvu.png"
              alt="Cisco Networking Logo"
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
