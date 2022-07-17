import { urlFor } from "../../../config/sanity";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Moment from "react-moment";
import Img from "../../tools/Img";

function ProjectCard({ data }) {
  return (
    <>
      <div
        className="bg-white shadow-md hover:shadow-lg border-b-4
       border-b-blue-800 hover:border-b-black overflow-hidden"
      >
        {data?.coverPhoto && (
          <div className="bg-black w-full h-[200px]">
            <Img
              src={urlFor(data?.coverPhoto).url()}
              alt={data.title}
              className="opacity-100"
            />
          </div>
        )}
        <div className="space-y-2 p-8 pb-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-base">{data?.status}</p>
            <p className="text-base">
              <Moment format="DD MMM YYYY">
                {data?.publishedAt || data.createdAt}
              </Moment>
            </p>
          </div>
          <p className=" font-bold lowercase first-letter:capitalize">
            {data.title}
          </p>
        </div>
        <Link href={`/projects/${data.slug}`}>
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

export default ProjectCard;
