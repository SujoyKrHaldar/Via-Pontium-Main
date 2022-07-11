import Img from "../../../tools/Img";
import { IoIosArrowDown } from "react-icons/io";

function LandingImage() {
  return (
    <>
      <div className="w-full h-[500px] z-10">
        <div
          className="bg-white p-2 rounded-full text-2xl flex items-center 
          absolute -top-6 left-1/2 -translate-x-1/2 z-20 drop-shadow-xl"
        >
          <IoIosArrowDown />
        </div>

        <div className="w-full h-fit absolute top-[-8rem] left-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffff"
              fillOpacity="1"
              d="M0,160L120,149.3C240,139,480,117,720,122.7C960,128,1200,160,1320,176L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </div>

        <Img src="/home.jpg" alt="Landing bridge" />
      </div>
    </>
  );
}

export default LandingImage;
