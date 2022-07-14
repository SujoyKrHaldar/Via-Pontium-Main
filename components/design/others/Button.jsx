import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Button({ href, text }) {
  return (
    <>
      <Link href={href}>
        <a className="group w-fit flex items-center justify-center gap-4 py-2 px-5 ">
          <div className="w-full  bg-black   absolute top-0 left-0 h-full"></div>
          <p className="font-medium text-base text-white">{text}</p>
          <div className="flex items-center text-xl text-white">
            <BsArrowRight />
          </div>
        </a>
      </Link>
    </>
  );
}

export default Button;
