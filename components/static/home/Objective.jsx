import Container from "../../layout/Container";
import Img from "../../tools/Img";

function Objective() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="absolute h-full top-0 right-0 w-full max-w-[76%] bg-gray-200"></div>
        <Container className="flex items-center justify-between gap-8">
          <div className="flex-1 w-full h-[500px] max-w-[360px] p-8 bg-white shadow-xl">
            <Img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt="Landing bridge"
            />
          </div>
          <div className="flex-1 p-8 space-y-3">
            <p className="font-bold">Our Objective</p>
            <h2 className="text-[#3f75c1] font-bold">
              Project objectives, Clients’ satisfaction and serving the
              community are always at the core of VPES’s priorities and it
              strongly responds to the project objective through its vast
              experiences and innovative approach.
            </h2>
            <p>
              Our objective is to provide the best of the engineering services
              to the clients. To understand and work achieve a common goal. By
              adopting good project management practices to deliver projects
              with best possible quality with added value in minimum time
              possible. Working with integrity and honesty with transparent work
              environment to build in the trust with our clients for a long-term
              relationship. To keep up the project requirements above our
              individual preferences.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Objective;
