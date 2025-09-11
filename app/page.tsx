import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#0d1016] min-h-screen">
      <div className="flex flex-row justify-between items-center px-8 py-3">
        <h4 className="text-white text-lg hover:text-[#1f6de6] font-bold cursor-pointer">
          Karim Badr
        </h4>
        <div className="flex flex-row gap-10">
          <h4 className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer">
            About
          </h4>
          <h4 className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer">
            Services
          </h4>
          <h4 className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer">
            Projects
          </h4>
          <h4 className="text-[#838a95] hover:text-[#1f6de6] border-b-2 border-transparent hover:border-[#1f6de6] pb-1 cursor-pointer">
            Contact
          </h4>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row gap-1  mt-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="#1c61cd"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
          </svg>
          <h4 className="text-[#838a95] font-bold">Abu Dhabi, UAE</h4>
        </div>

        <h4 className="text-white text-8xl font-bold justify-center items-center mt-10">
          Karim Badr
        </h4>

        <div className="flex flex-row mt-10 gap-5">
          <svg
            xmlns="http://www.w3.org/1999/xlink"
            width={35}
            height={35}
            fill="#1c61cd"
            viewBox="0 0 81.83 122.88"
          >
            <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
          </svg>

          <h4 className="text-2xl text-white font-bold">Electrical Engineer</h4>

          <svg
            xmlns="http://www.w3.org/1999/xlink"
            width={35}
            height={35}
            fill="#1c61cd"
            viewBox="0 0 81.83 122.88"
          >
            <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
          </svg>
        </div>

        <h4 className="text-[#1c61cd] text-lg mt-5 font-bold">
          Specialized in Construction & Contracting Projects
        </h4>

        <h4 className="text-[#838a95] text-lg mt-5 px-100 text-center font-bold">
          Expert in electrical system design, installation supervision, and
          project coordination. Delivering reliable electrical solutions for
          government and private sector projects in the UAE with{" "}
          <span className="text-blue-500">6+ years of experience.</span>
        </h4>

        <div className="flex flex-row gap-10 justify-center items-center mt-10">
          <div className="bg-[#1f6eea] px-12 py-5  rounded-md flex flex-row gap-5">
            <h4>Get In Touch</h4>
            <svg
              xmlns="http://www.w3.org/1999/xlink"
              width={25}
              height={25}
              fill="#1c61cd"
              viewBox="0 0 122.88 75.32"
            >
              <polygon points="122.88,37.66 84.89,75.32 84.89,51.08 0,51.08 0,24.24 84.89,24.24 84.89,0 122.88,37.66" />
            </svg>
          </div>

          <div className="flex flex-row items-center gap-5 rounded-lg border border-white p-4 bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={35}
              height={35}
              fill="#1c61cd"
              viewBox="0 0 122.88 100.54"
            >
              <path
                d="M65.98,54.6H56.9c-0.15,0-0.27,0.06-0.37,0.15c-0.1,0.1-0.15,0.23-0.15,0.37v19.14c0,0.15,0.06,0.27,0.15,0.37
      c0.1,0.1,0.23,0.15,0.37,0.15h9.07c0.15,0,0.27-0.06,0.37-0.15c0.1-0.1,0.15-0.23,0.15-0.37V55.12c0-0.15-0.06-0.27-0.15-0.37
      C66.25,54.64,66.12,54.6,65.98,54.6z
      M6.98,13.97h31.49V4.94c0-1.37,0.56-2.6,1.45-3.49
      C40.82,0.56,42.06,0,43.41,0h36.06c1.37,0,2.59,0.56,3.49,1.45c0.89,0.89,1.45,2.14,1.45,3.49v9.03h31.49
      c1.93,0,3.67,0.79,4.92,2.06c1.27,1.27,2.06,3.01,2.06,4.92v16.86c-7.89,5.41-16.03,10.02-24.42,13.78
      c-8.44,3.78-17.14,6.71-26.14,8.73v-6.74c0-1.54-0.63-2.96-1.64-3.98c-1.01-1.01-2.43-1.64-3.98-1.64H56.17l0,0
      c-1.54,0-2.96,0.63-3.98,1.64c-1.01,1.01-1.64,2.43-1.64,3.98v6.59c-8.76-2.01-17.25-4.89-25.48-8.58
      C16.45,47.73,8.1,42.96,0,37.36V20.95c0-1.93,0.79-3.67,2.06-4.92C3.32,14.76,5.07,13.97,6.98,13.97z
      M122.88,47.81v45.76c0,1.93-0.79,3.67-2.06,4.92c-1.27,1.27-3.01,2.06-4.92,2.06H6.98c-1.93,0-3.67-0.79-4.92-2.06
      C0.79,97.22,0,95.48,0,93.57V47.39c6.89,4.42,13.98,8.28,21.27,11.55c9.41,4.22,19.17,7.45,29.29,9.61v7.25
      c0,1.54,0.63,2.96,1.64,3.98c1.01,1.01,2.44,1.64,3.98,1.64h10.53c1.54,0,2.96-0.63,3.98-1.64c1.01-1.01,1.64-2.43,1.64-3.98v-7.6
      l0.11,0.46c10.31-2.17,20.25-5.43,29.83-9.73C109.33,55.77,116.2,52.05,122.88,47.81z
      M75.71,6.73H47.19
      c-0.17,0-0.31,0.06-0.44,0.19c-0.1,0.1-0.19,0.27-0.19,0.44v6.42h29.75V7.36c0-0.17-0.06-0.31-0.19-0.44
      c-0.1-0.1-0.27-0.19-0.44-0.19H75.71z"
              />
            </svg>
            <h4 className="text-white">View My Experience</h4>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-40 mt-20">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h4 className="text-2xl text-[#1c61cd] font-bold">6+</h4>
            <h4 className="text-[#838a95] font-medium">Years Experience</h4>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <h4 className="text-2xl text-[#1c61cd] font-bold">10+</h4>
            <h4 className="text-[#838a95] font-medium">Major Projects</h4>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center">
            <h4 className="text-2xl text-[#1c61cd] font-bold">Gov & Private</h4>
            <h4 className="text-[#838a95] font-medium">Client Sectors</h4>
          </div>
        </div>
      </div>

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

      <div className="flex flex-row justify-between mx-10 gap-5">
        <div
          className="flex flex-1 flex-col gap-3 justify-center items-center border border-gray-600 rounded-md p-3
         bg-[#171b23]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={44}
            height={44}
            fill="#1c61cd"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
          </svg>

          <h4>6+</h4>
          <h4>Years Experience</h4>
        </div>

        <div
          className="flex flex-1 flex-col gap-3 justify-center items-center border border-gray-600 rounded-md p-3
        bg-[#171b23]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={44}
            height={44}
            fill="#1c61cd"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
          </svg>

          <h4>10+</h4>
          <h4>Projects Completed</h4>
        </div>
        <div
          className="flex flex-1 flex-col gap-3 justify-center items-center border border-gray-600 rounded-md p-3
        bg-[#171b23]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="#1c61cd"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
          </svg>

          <h4>7+</h4>
          <h4>Clients Served</h4>
        </div>
        <div
          className="flex flex-1 flex-col gap-3 justify-center items-center border border-gray-600 rounded-md p-3
        bg-[#171b23]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="#1c61cd"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
          </svg>

          <h4>+1</h4>
          <h4>Countries Worked In</h4>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-15">
        <div className="flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/1999/xlink"
            width={30}
            height={30}
            fill="#1c61cd"
            viewBox="0 0 81.83 122.88"
          >
            <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
          </svg>

          <h4 className="text-white font-bold text-4xl">
            Professional{" "}
            <span className="text-[#1f6de6] text-4xl">Services</span>
          </h4>
        </div>

        <h4 className="text-[#838a95] mt-10 px-100 text-center text-lg">
          Real-world electrical engineering services backed by over 6 years of
          field experience in UAE and Egypt, delivered with technical precision
          and compliance.
        </h4>

        <div className="flex flex-row justify-between m-10 gap-5">
          <div className="border border-gray-600 p-5 rounded-2xl bg-[#171b23]">
            <div className="flex bg-[#1f6de6] w-[80px] h-[80px] rounded-2xl justify-center items-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="#FFFFFF"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              </svg>
            </div>
            <h4 className="mt-5 text-white font-bold text-lg">
              Electrical System Design
            </h4>
            <h4 className="text-[#838a95] mt-5">
              Design of electrical and ELV systems aligned with international
              standards and local regulations (PGC, ADDC), ensuring efficiency
              and safety.
            </h4>

            <ul className="list-disc list-inside mt-5 marker:text-[#1f6de6]">
              <li className="text-white">Load & short circuit calculations</li>
              <li className="text-white">Shop drawings preparation</li>
              <li className="text-white">Voltage drop analysis</li>
              <li className="text-white">IFC & tender coordination</li>
            </ul>
          </div>

          <div className="border border-gray-600 p-5 rounded-2xl bg-[#171b23]">
            <div className="flex bg-[#1f6de6] w-[80px] h-[80px] rounded-2xl justify-center items-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="#FFFFFF"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              </svg>
            </div>
            <h4 className="mt-5 text-white font-bold text-lg">
              Electrical System Design
            </h4>
            <h4 className="text-[#838a95] mt-5">
              Design of electrical and ELV systems aligned with international
              standards and local regulations (PGC, ADDC), ensuring efficiency
              and safety.
            </h4>

            <ul className="list-disc list-inside mt-5 marker:text-[#1f6de6]">
              <li className="text-white">Load & short circuit calculations</li>
              <li className="text-white">Shop drawings preparation</li>
              <li className="text-white">Voltage drop analysis</li>
              <li className="text-white">IFC & tender coordination</li>
            </ul>
          </div>

          <div className="border border-gray-600 p-5 rounded-2xl bg-[#171b23]">
            <div className="flex bg-[#1f6de6] w-[80px] h-[80px] rounded-2xl justify-center items-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="#FFFFFF"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              </svg>
            </div>
            <h4 className="mt-5 text-white font-bold text-lg">
              Electrical System Design
            </h4>
            <h4 className="text-[#838a95] mt-5">
              Design of electrical and ELV systems aligned with international
              standards and local regulations (PGC, ADDC), ensuring efficiency
              and safety.
            </h4>

            <ul className="list-disc list-inside mt-5 marker:text-[#1f6de6]">
              <li className="text-white">Load & short circuit calculations</li>
              <li className="text-white">Shop drawings preparation</li>
              <li className="text-white">Voltage drop analysis</li>
              <li className="text-white">IFC & tender coordination</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-row justify-between mx-10 gap-5">
          <div className="border border-gray-600 p-5 rounded-2xl bg-[#171b23]">
            <div className="flex bg-[#1f6de6] w-[80px] h-[80px] rounded-2xl justify-center items-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="#FFFFFF"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              </svg>
            </div>
            <h4 className="mt-5 text-white font-bold text-lg">
              Lighting & ELV Systems
            </h4>
            <h4 className="text-[#838a95] mt-5">
              Implementation and coordination of lighting systems, fire alarms,
              and low-voltage systems integrated with existing infrastructure.
            </h4>

            <ul className="list-disc list-inside mt-5 marker:text-[#1f6de6]">
              <li className="text-white">Fire alarm loop integrations</li>
              <li className="text-white">Emergency lighting systems</li>
              <li className="text-white">
                Coordination with ELV subcontractors
              </li>
              <li className="text-white">Lighting schematics and layouts</li>
            </ul>
          </div>

          <div className="border border-gray-600 p-5 rounded-2xl bg-[#171b23]">
            <div className="flex bg-[#1f6de6] w-[80px] h-[80px] rounded-2xl justify-center items-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="#FFFFFF"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              </svg>
            </div>
            <h4 className="mt-5 text-white font-bold text-lg">
              Safety & Compliance
            </h4>
            <h4 className="text-[#838a95] mt-5">
              Ensuring full compliance with safety codes, project
              specifications, and third-party inspections throughout all project
              phases.
            </h4>

            <ul className="list-disc list-inside mt-5 marker:text-[#1f6de6]">
              <li className="text-white">PGC & ADDC standard compliance</li>
              <li className="text-white">Third-party inspection handling</li>
              <li className="text-white">Test & commissioning support</li>
              <li className="text-white">Live testing & shutdown planning</li>
            </ul>
          </div>

          <div className="border border-gray-600 p-5 rounded-2xl bg-[#171b23]">
            <div className="flex bg-[#1f6de6] w-[80px] h-[80px] rounded-2xl justify-center items-center flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="#FFFFFF"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              </svg>
            </div>
            <h4 className="mt-5 text-white font-bold text-lg">
              Project Coordination
            </h4>
            <h4 className="text-[#838a95] mt-5">
              Managing electrical project milestones, subcontractor
              deliverables, and documentation in coordination with consultants
              and clients.
            </h4>

            <ul className="list-disc list-inside mt-5 marker:text-[#1f6de6]">
              <li className="text-white">
                Technical meetings with consultants
              </li>
              <li className="text-white">Progress reports & milestones</li>
              <li className="text-white">Team coordination & approvals</li>
              <li className="text-white">Client & stakeholder communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
