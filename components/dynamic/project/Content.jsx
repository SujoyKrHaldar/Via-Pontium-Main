import Container from "../../layout/Container";

function Content({ data }) {
  return (
    <>
      <div className="py-32 w-full h-auto bg-white">
        <Container className="flex items-center justify-evenly gap-8 ">
          <div className="flex-1 space-y-3">
            <div className="">
              <p className="font-bold">Assignment</p>
              <p>{data.assignment}</p>
            </div>

            <div className="">
              <p className="font-bold">Criticality</p>
              <p>{data.criticality}</p>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="">
              <p className="font-bold">Client</p>
              <p>{data?.client}</p>
            </div>

            <div className="">
              <p className="font-bold">Status</p>
              <p>{data?.status}</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Content;
