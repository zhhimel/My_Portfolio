import user_info from "../../data/user_info.js";
import { FaArrowCircleUp, FaDownload } from "react-icons/fa";

function Footer({ theme }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="p-4 text-center md:flex justify-between">
      {/* =========== RESUME DOWNLOAD BUTTON =========== */}
      <a
        href="/Md_Zihadi_Haque.pdf"
        download="Md_Zihadi_Haque.pdf"
        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg inline-flex items-center transition-all shadow-lg"
      >
        <FaDownload className="mr-2 text-white" /> Download Resume
      </a>

      {/* =========== SCROLL ON TOP BUTTON =========== */}
      <button
        onClick={() => scrollToTop()}
        className="text-zinc-600 self-center mt-2 md:mt-0 dark:text-zinc-300 mx-auto md:mx-0 text-sm font-light flex gap-2"
      >
        <FaArrowCircleUp className="self-center text-red-800 dark:text-red-500" /> Go back to top
      </button>
    </footer>
  );
}

export default Footer;
