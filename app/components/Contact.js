export default function GetContact() {
  return (
    <div className="flex flex-col mt-20 px-10 justify-center ">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h4 className="text-[#fffff] text-6xl font-bold">
          Let's Work <span className="text-[#1f6de6] font-bold">Together</span>
        </h4>
        <h4 className="text-[#838a95] px-80 text-center text-lg">
          Have a project in mind? Whether it's electrical consultancy, system
          design, or site supervision — I'm just one message away.
        </h4>
      </div>

      <div className="flex flex-row justify-between gap-5 mt-20">
        <div
          className="flex flex-col bg-[#171b23] border border-[#838a95] p-5 rounded-lg flex-1
      hover:shadow-lg hover:shadow-[#1f6de6] transition-all"
        >
          <div className="flex flex-row gap-5 items-center">
            <div className="p-5 bg-[#1f6de6] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="#FFFFFF"
                viewBox="0 0 122.88 78.607"
              >
                <path d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z" />
              </svg>
            </div>

            <h4>Email</h4>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h4 className="text-[#838a95]">Personal:</h4>
            <h4 className="text-[#1f6de6]">karim.m.badr@outlook.com</h4>
            <h4 className="text-[#838a95]">Work:</h4>
            <h4 className="text-[#1f6de6]">karim.badr@aswar.com</h4>
          </div>
        </div>

        <div className="flex flex-col bg-[#171b23] border border-[#838a95] p-5 rounded-lg flex-1">
          <div className="flex flex-row gap-5 items-center">
            <div className="p-5 bg-[#1f6de6] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="#FFFFFF"
                viewBox="0 0 122.88 122.267"
              >
                <path d="M33.822,50.291c4.137,7.442,8.898,14.604,15.074,21.133C55.1,77.984,62.782,83.962,72.771,89.03l0.01,0.005l0.002-0.005 c0.728,0.371,1.421,0.362,2.072,0.118c0.944-0.353,1.927-1.137,2.883-2.086c0.729-0.726,1.643-1.924,2.631-3.223 c3.846-5.054,8.601-11.301,15.314-8.193c0.142,0.065,0.276,0.141,0.402,0.226l22.373,12.852c0.08,0.046,0.157,0.095,0.23,0.147 c2.966,2.036,4.177,5.172,4.19,8.683c0.014,3.621-1.329,7.674-3.274,11.101c-2.565,4.517-6.387,7.502-10.761,9.525 c-4.17,1.928-8.798,2.954-13.267,3.608c-6.989,1.025-13.578,0.374-20.288-1.692c-6.55-2.017-13.176-5.385-20.4-9.86l-0.526-0.326 c-3.326-2.06-6.906-4.276-10.389-6.904C31.108,93.296,18.007,79.283,9.512,63.904C2.361,50.958-1.552,36.995,0.581,23.681 C1.75,16.375,4.901,9.743,10.333,5.35c4.762-3.853,11.188-5.94,19.448-5.203c0.973,0.084,1.793,0.639,2.255,1.419l0.006-0.003 l14.324,24.27c2.11,2.718,2.344,5.415,1.203,8.096c-0.943,2.218-2.892,4.251-5.476,6.168c-0.786,0.65-1.708,1.325-2.659,2.021 C36.236,44.459,32.578,47.136,33.822,50.291L33.822,50.291z M44.67,75.422C38.066,68.44,33.035,60.88,28.695,53.065 c-0.076-0.123-0.144-0.253-0.202-0.39c-3.174-7.459,2.52-11.625,7.493-15.262c0.845-0.618,1.663-1.217,2.401-1.829l0.002,0.003 c0.043-0.036,0.088-0.071,0.135-0.105c1.843-1.354,3.171-2.647,3.678-3.837c0.289-0.679,0.182-1.426-0.466-2.265 c-0.111-0.129-0.213-0.271-0.303-0.423L27.795,5.852c-5.869-0.241-10.419,1.321-13.784,4.044 c-4.239,3.429-6.723,8.759-7.674,14.699c-1.905,11.894,1.716,24.594,8.292,36.5c8.078,14.623,20.575,27.977,32.864,37.25 c3.379,2.55,6.776,4.653,9.932,6.607l0.526,0.326c6.818,4.223,13.017,7.386,19.052,9.244c5.876,1.809,11.634,2.38,17.729,1.486 c4.009-0.587,8.113-1.485,11.668-3.129c3.351-1.55,6.248-3.785,8.134-7.104c1.496-2.637,2.53-5.653,2.521-8.222 c-0.006-1.63-0.472-3.029-1.605-3.844L93.2,80.93c-2.461-1.081-5.629,3.081-8.193,6.45c-1.104,1.452-2.125,2.792-3.156,3.817 c-1.477,1.466-3.118,2.723-4.962,3.411c-2.136,0.799-4.395,0.834-6.755-0.37l0.002-0.004C59.522,88.849,51.323,82.457,44.67,75.422 L44.67,75.422z" />
              </svg>
            </div>

            <h4>Phone</h4>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h4 className="text-[#838a95]">Mobile / WhatsApp:</h4>
            <h4 className="text-[#1f6de6]">+971 56 370 7126</h4>
            <h4 className="text-[#838a95]">Landline:</h4>
            <h4 className="text-[#ffffff]">02-555 07 77</h4>
            <h4 className="text-[#838a95]">Working Hours:</h4>
            <div className="flex flex-col ">
              <h4 className="text-[#ffffff]">Monday to Friday</h4>
              <h4 className="text-[#ffffff]">8:00 AM – 6:00 PM</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#171b23] border border-[#838a95] p-5 rounded-lg flex-1">
          <div className="flex flex-row gap-5 items-center">
            <div className="p-5 bg-[#1f6de6] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={25}
                fill="#FFFFFF"
                viewBox="0 0 92.53 122.88"
              >
                <path d="M46.27,24.08A22.75,22.75,0,1,1,23.52,46.83,22.75,22.75,0,0,1,46.27,24.08Zm1.36,91.62A82.87,82.87,0,0,0,64,101.81,85.44,85.44,0,0,0,84.56,62.23c2.81-13.67,1.5-27-4.75-37.34a36.74,36.74,0,0,0-6.63-8.06C65.62,9.93,57,6.64,48.23,6.56,39.07,6.49,29.77,10,21.55,16.5a38.54,38.54,0,0,0-8.63,9.56C7.15,35.15,5.41,46.43,7.31,58.24c1.94,12,7.66,24.61,16.77,36A102.46,102.46,0,0,0,47.63,115.7Zm21.24-9.46a89.32,89.32,0,0,1-19.33,16,3.28,3.28,0,0,1-3.71.13,109.25,109.25,0,0,1-26.9-24c-9.8-12.31-16-26-18.1-39.1C-1.33,45.89.7,33,7.36,22.53a45.3,45.3,0,0,1,10.1-11.18C26.85,3.87,37.6-.09,48.29,0,58.6.09,68.79,3.92,77.6,12a43.1,43.1,0,0,1,7.82,9.52c7.15,11.8,8.71,26.83,5.57,42.05a92.2,92.2,0,0,1-22.12,42.7Z" />
              </svg>
            </div>

            <h4>Email</h4>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h4 className="text-[#838a95]">Office Address:</h4>
            <h4 className="text-[#ffffff]">
              Prestige Tower 17, 15th Floor, MBZ, Abu Dhabi, UAE
            </h4>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col border border-[#838a95] rounded-lg mt-20 hover:shadow-lg hover:shadow-[#1f6de6] transition-all
        justify-center items-center gap-5 py-10 bg-[#171b23]"
      >
        <div className="p-5 bg-[#1f6de6] rounded-full w-fit mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="#FFFFFF"
            viewBox="0 0 122.88 78.607"
          >
            <path d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z" />
          </svg>
        </div>

        <h4 className="text-2xl font-bold text-[#ffffff]">
          Ready to Start Your Next Project?
        </h4>
        <h4 className="text-[#838a95] px-100 text-center font-bold">
          Let's schedule a consultation and turn your ideas into a powerful,
          safe, and compliant electrical solution.
        </h4>
        <div className="flex flex-row gap-5 ">
          <div className="bg-[#1f6de6] rounded-lg px-5 py-3">
            <h4 className="font-bold">Send Email</h4>
          </div>
          <div className="flex flex-row gap-3 bg-[#0c1116] px-5 py-3 rounded-lg hover:border border-[#1f6de6] items-center">
            <h4 className="font-bold hover:text-[#1f6de6]">View LinkedIn</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              fill="#FFFFFF"
              viewBox="0 0 512 509.64"
            >
              <path  d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
