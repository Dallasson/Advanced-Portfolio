
import Image from "next/image";

export default function GetAbout(){
    return (
        <div>
        
           <div className="flex flex-row m-50">
        <div className="flex flex-1 justify-center items-center border-amber-600 rounded-2xl">
          <Image
            src="/profile.png"
            alt="profile"
            width={450}
            height={450}
            className="rounded-3xl border-amber-300 object-cover"
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/1999/xlink"
              width={40}
              height={40}
              fill="#1c61cd"
              viewBox="0 0 81.83 122.88"
            >
              <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
            </svg>
            <h4 className="text-4xl font-bold">
              About <span className="text-[#1f6de6]">Me</span>
            </h4>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            <h4 className="text-[#838a95]">
              I'm Karim Badr, an accomplished Electrical Engineer with over 6
              years of experience in the UAE. I specialize in designing and
              managing electrical and ELV systems for major construction
              projects, focusing on quality, safety, and regulatory compliance.
            </h4>
            <h4 className="text-[#838a95]">
              Currently, I work as an Electrical Project Engineer at Aswar
              Engineering & General Contracting, handling high-profile projects
              such as the Presidential Guard Protocol Camp – Phase 2. I
              coordinate closely with consultants and oversee execution,
              approvals, and site management.
            </h4>

            <h4 className="text-[#838a95]">
              I'm also an Entrepreneur & Managing Partner at Anwar Al Badr
              Technical Works, where I lead the full lifecycle of electrical and
              ELV projects — from planning and pricing to execution and closing
              — across residential and commercial sectors in the UAE.
            </h4>
          </div>

          <div className="flex flex-row gap-2 items-center mt-5">
            <svg
              xmlns="http://www.w3.org/1999/xlink"
              width={25}
              height={25}
              fill="#1c61cd"
              viewBox="0 0 81.83 122.88"
            >
              <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
            </svg>
            <h4 className="text-lg text-[#1f6de6] font-bold">
              Core Specializations
            </h4>
          </div>

          <div className="flex flex-row gap-2 mt-5">
            <div className="flex flex-col gap-3 flex-1">
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6]">
                Electrical System Design
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6]">
                Project Coordination
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6]">
                Procurement & Material Approval
              </h4>
            </div>

            <div className="flex flex-col gap-3 flex-1">
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6]">
                ELV Systems Implementation
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6]">
                Subcontractor Management
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6]">
                Regulatory Compliance (PGC)
              </h4>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}