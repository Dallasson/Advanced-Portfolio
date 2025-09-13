import Image from "next/image";

export default function GetAbout() {
  return (
    <div>
      <div className="flex flex-col md:flex-row px-4 md:px-12 lg:px-20 mt-20 mb-20 gap-10">
        {/* Profile Image */}
        <div className="flex flex-1 justify-center items-center rounded-2xl">
          <Image
            src="/profile.png"
            alt="profile"
            width={450}
            height={450}
            className="rounded-3xl border border-[#30353c] object-cover max-w-full h-auto"
          />
        </div>

        {/* About Content */}
        <div className="flex flex-col flex-1">
          {/* Title */}
          <div className="flex flex-row gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="#1c61cd"
              viewBox="0 0 81.83 122.88"
            >
              <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
            </svg>
            <h4 className="text-3xl md:text-4xl font-bold">
              About <span className="text-[#1f6de6]">Me</span>
            </h4>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-5 mt-5">
            <h4 className="text-[#838a95] text-base md:text-lg leading-relaxed">
              I'm Karim Badr, an accomplished Electrical Engineer with over 6
              years of experience in the UAE. I specialize in designing and
              managing electrical and ELV systems for major construction
              projects, focusing on quality, safety, and regulatory compliance.
            </h4>
            <h4 className="text-[#838a95] text-base md:text-lg leading-relaxed">
              Currently, I work as an Electrical Project Engineer at Aswar
              Engineering & General Contracting, handling high-profile projects
              such as the Presidential Guard Protocol Camp – Phase 2. I
              coordinate closely with consultants and oversee execution,
              approvals, and site management.
            </h4>
            <h4 className="text-[#838a95] text-base md:text-lg leading-relaxed">
              I'm also an Entrepreneur & Managing Partner at Anwar Al Badr
              Technical Works, where I lead the full lifecycle of electrical and
              ELV projects — from planning and pricing to execution and closing
              — across residential and commercial sectors in the UAE.
            </h4>
          </div>

          {/* Core Specializations */}
          <div className="flex flex-row gap-2 items-center mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="#1c61cd"
              viewBox="0 0 81.83 122.88"
            >
              <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
            </svg>
            <h4 className="text-lg md:text-xl text-[#1f6de6] font-bold">
              Core Specializations
            </h4>
          </div>

          {/* Specialization Columns */}
          <div className="flex flex-col md:flex-row gap-5 mt-5">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 flex-1">
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6] transition">
                Electrical System Design
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6] transition">
                Project Coordination
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6] transition">
                Procurement & Material Approval
              </h4>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3 flex-1">
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6] transition">
                ELV Systems Implementation
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6] transition">
                Subcontractor Management
              </h4>
              <h4 className="rounded-lg bg-[#171b23] px-4 py-2 border border-gray-700 hover:border-[#1f6de6] transition">
                Regulatory Compliance (PGC)
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
