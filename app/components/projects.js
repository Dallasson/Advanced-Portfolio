// pages/index.tsx  (or app/page.tsx if using Next.js 13+)
export default function Home() {
  const projects = [
    {
      category: "Government",
      title: "Presidential Guard Protocol Camp – Phase 2",
      description:
        "Handled all ELV and electrical design, drawing approvals, and site implementation in compliance with PGC and ADDC standards.",
      location: "Mafraq Camp, UAE",
      year: "2025",
      client: "Aswar Eng. & Contracting",
    },
    {
      category: "Airport",
      title: "Abu Dhabi Airport ANS CUP-2",
      description:
        "Designed electrical and ELV schematics, performed voltage drop calculations, and coordinated with AECOM and ADAC teams.",
      location: "Abu Dhabi, UAE",
      year: "2024",
      client: "AECOM / ADAC",
    },
    {
      category: "Residential",
      title: "Luxury Villas – Al Raha Beach",
      description:
        "Completed LV, MV, and ELV system design, ensuring compliance with ADDC standards and client requirements.",
      location: "Al Raha, Abu Dhabi",
      year: "2023",
      client: "Aldar Properties",
    },
    {
      category: "Healthcare",
      title: "Cleveland Clinic Expansion",
      description:
        "Supervised installation of advanced electrical systems ensuring compliance with DOH and international standards.",
      location: "Abu Dhabi, UAE",
      year: "2022",
      client: "Arabtec Construction",
    },
    {
      category: "Education",
      title: "New York University Abu Dhabi",
      description:
        "Led electrical works including ELV and lighting systems for multiple campus facilities.",
      location: "Abu Dhabi, UAE",
      year: "2021",
      client: "NYU / Mubadala",
    },
  ];

  return (
    <div className="flex flex-col mt-20 justify-center items-center">
      {/* ===== Section Title ===== */}
      <div className="flex flex-row gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          fill="#1c61cd"
          viewBox="0 0 81.83 122.88"
        >
          <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
        </svg>
        <h4 className="text-4xl font-bold">Featured Projects</h4>
      </div>

      {/* ===== Subtitle ===== */}
      <h4 className="text-lg text-[#838a95] px-10 md:px-40 lg:px-80 text-center mt-5">
        A showcase of high-profile electrical engineering projects completed in
        the UAE, highlighting excellence in design, execution, and compliance.
      </h4>

      {/* ===== Projects Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 border border-gray-600 rounded-2xl bg-[#171b23] p-5 hover:shadow-lg hover:shadow-[#1d60c260] transition-all"
          >
            {/* Category */}
            <h4 className="bg-[#172236] rounded-2xl text-[#1d60c2] text-sm w-fit px-3 py-1">
              {p.category}
            </h4>

            {/* Title */}
            <h4 className="text-lg font-bold">{p.title}</h4>

            {/* Description */}
            <h4 className="text-sm text-[#838a95]">{p.description}</h4>

            {/* Location */}
            <div className="flex flex-row gap-2 items-center">
              <Icon />
              <h4 className="text-[#838a95] text-sm">{p.location}</h4>
            </div>

            {/* Year */}
            <div className="flex flex-row gap-2 items-center">
              <Icon />
              <h4 className="text-[#838a95] text-sm">{p.year}</h4>
            </div>

            {/* Client */}
            <div className="flex flex-row gap-2 items-center">
              <Icon />
              <h4 className="text-[#838a95] text-sm">{p.client}</h4>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}

/* === Small Inline Icon === */
function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      fill="#1c61cd"
      viewBox="0 0 81.83 122.88"
    >
      <polygon points="33.05,63.12 0,60.01 27.4,0 64.86,0 43.62,34.43 81.83,38.66 11.69,122.88 33.05,63.12" />
    </svg>
  );
}
