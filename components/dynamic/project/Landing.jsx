import { urlFor } from "../../../config/sanity";
import Container from "../../layout/Container";
import Img from "../../tools/Img";

function Landing({ data }) {
  return (
    <>
      <div className="py-16 bg-black w-full h-screen">
        {data?.coverPhoto && (
          <div className="absolute inset-0 w-full h-full">
            <Img
              src={urlFor(data?.coverPhoto).url()}
              alt={data.title}
              className="opacity-70"
            />
          </div>
        )}
        <Container className="flex items-center text-white">
          <div className="space-y-3 max-w-[530px]">
            <p className=" font-medium lowercase first-letter:capitalize">
              {data.category}
            </p>
            <h1 className="font-bold">{data.title}</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Landing;
