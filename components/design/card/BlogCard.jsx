import { urlFor } from "../../../config/sanity";
import Moment from "react-moment";
import Img from "../../tools/Img";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

function BlogCard() {
  return (
    <>
      <div
        className="bg-white shadow-md hover:shadow-lg border-b-4
       border-b-blue-800 hover:border-b-black overflow-hidden"
      >
        <div className="bg-black w-full h-[200px]">
          <Img src="/home.jpg" alt="Landing bridge" className="opacity-100" />
        </div>
        <div className="p-8 pb-4">
          <div className="flex items-center justify-between gap-4 mb-2">
            <p className="text-base font-medium">Civil Eng</p>
            <p className="text-base">
              <Moment format="DD MMM YYYY">{new Date()}</Moment>
            </p>
          </div>
          <p className="font-semibold mb-2">The new Blog name will be here.</p>
          <p className="text-base">
            The new Blog name will be here The new Blog name will be here The
            new Blog name will be here.
          </p>
        </div>
        <Link href="/">
          <a className="px-8 py-4 flex items-center justify-between gap-4 group">
            <div className="absolute w-full h-full md:translate-y-[56px] group-hover:translate-y-0 inset-0 bg-black"></div>

            <p className="text-base group-hover:text-white">Read Article</p>

            <div className="flex items-center text-xl text-white">
              <BsArrowRight />
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
