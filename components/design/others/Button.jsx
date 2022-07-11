import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function Button({ href, text }) {
  return (
    <>
      <Link href={href}>
        <a className="group w-fit flex items-center justify-center gap-4 py-2 px-5 ">
          <div className="group-hover:w-full -translate-x-2 group-focus:w-full group-hover:translate-x-0 bg-slate-200 group-hover:bg-slate-300 absolute top-0 left-0 w-1/5 h-full"></div>
          <p className="font-medium text-base">{text}</p>
          <div className="flex items-center text-xl">
            <BsArrowRight />
          </div>
        </a>
      </Link>
    </>
  );
}

export default Button;
