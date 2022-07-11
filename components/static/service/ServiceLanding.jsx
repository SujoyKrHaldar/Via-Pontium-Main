import Container from "../../layout/Container";

function ServiceLanding() {
  return (
    <>
      <section className="py-24 bg-gray-100">
        <Container>
          <div className="max-w-[37rem] py-16 text-center mx-auto space-y-3 z-20">
            <p className="font-bold">What we do the best</p>
            <h1>
              Start your <span className="font-bold">Next Project</span> with
              proper <span className="font-bold"> Research.</span>
            </h1>
            <p>And let us help you reach your goals.</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ServiceLanding;
