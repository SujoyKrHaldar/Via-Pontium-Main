import { urlFor } from "../../../config/sanity";
import Moment from "react-moment";
import Img from "../../tools/Img";

function ProjectCard({ data }) {
  return (
    <>
      <div className="p-4 w-full h-auto bg-gray-100 space-y-2">
        {data?.coverPhoto && (
          <div className="bg-black w-full h-[200px]">
            <Img
              src={urlFor(data?.coverPhoto).url()}
              alt={data.title}
              className="opacity-100"
            />
          </div>
        )}
        <div className="space-y-2 p-4">
          <p className=" font-bold lowercase first-letter:capitalize">
            {data.title}
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="text-base">
              <Moment format="DD MMM YYYY">
                {data?.publishedAt || data.createdAt}
              </Moment>
            </p>

            <p className="text-base">{data?.status}</p>
          </div>

          <p
            onClick={() => alert(JSON.stringify(data))}
            className="font-bold text-base cursor-pointer"
          >
            Read more
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
