export default function GetSection({ onAboutClick, onServicesClick, onProjectsClick, onContactClick }) {
  return (
    <div className="flex flex-row justify-between items-center px-8 py-3">
      <h4 className="text-white text-lg hover:text-[#1f6de6] font-bold cursor-pointer">
        Karim Badr
      </h4>

      <div className="flex flex-row gap-10">
        <h4
          onClick={onAboutClick}
          className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer"
        >
          About
        </h4>

        <h4
          onClick={onServicesClick}
          className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer"
        >
          Services
        </h4>

        <h4
          onClick={onProjectsClick}
          className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer"
        >
          Projects
        </h4>

        <h4
          onClick={onContactClick}
          className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer"
        >
          Contact
        </h4>
      </div>
    </div>
  );
}
