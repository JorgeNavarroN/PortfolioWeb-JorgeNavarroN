import AwardIcon from "../assets/icons/AwardIcon";

export default function Certificaciones() {
  return (
    <section className="col-span-2">
      <div className="flex flex-row items-center gap-8 py-[4rem]">
        <AwardIcon />
        <h2 className="text-3xl font-medium">
          Certificaciones
        </h2>
      </div>
      <ul className="grid grid-cols-2 place-self-center gap-8">
        <li>
          <div className="grid place-content-center bg-white w-[500px] h-[300px] rounded-[12px] overflow-hidden">
            <img
              src="https://res.cloudinary.com/dl1fugaha/image/upload/v1739372536/Cisco-Networking_logo_hetbn8.jpg"
              alt="Cisco Networking Logo"
            />
          </div>
        </li>
        <li>
          <div className="grid place-content-center bg-white w-[500px] h-[300px] rounded-[12px] overflow-hidden">
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
