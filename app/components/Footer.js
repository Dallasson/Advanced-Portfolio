export default function GetFooter() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mt-20  p-5">
      {/* full-width separator */}
      <hr className="border-t border-gray-600 w-full mb-6" />

      {/* footer content */}
      <div className="flex flex-row justify-between items-center px-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-[#838a95] font-medium text-sm">
            © 2025 Karim Badr. All rights reserved.
          </h4>
          <h4 className="text-[#838a95] font-medium text-sm">
            Developed by <span className="text-[#1f6de6] cursor-pointer">Essam Mohamed</span>
          </h4>
        </div>

        <h4
          onClick={handleScrollTop}
          className="cursor-pointer hover:text-[#1f6de6] text-[#838a95] transition-colors"
        >
          Back To Top
        </h4>
      </div>
    </div>
  );
}
