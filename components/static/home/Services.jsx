import Container from "../../layout/Container";

function Services() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="absolute bg-gray-100 w-full h-1/3 bottom-0 left-0"></div>
        <Container>
          <div className="max-w-[650px] space-y-3">
            <p>What we do</p>
            <h2 className="font-bold">
              We are a team of experienced professional in their specialities.
              Discover our services and adjust them to yourself.
            </h2>
            <p>
              According to the key skills present in our team members, we can
              deliver the following consultancy services.
            </p>
          </div>

          <div className="my-16">
            <p>Our focus</p>

            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="shadow-md flex-1 p-4 bg-white h-[230px] flex items-end">
                <p>
                  Erection & launching scheme design for different types of
                  bridges.
                </p>
              </div>

              <div className="shadow-md flex-1 p-4 bg-white h-[230px] flex items-end">
                <p>Assessment, restoration and rehabilitation.</p>
              </div>

              <div className="shadow-md flex-1 p-4 bg-white h-[230px] flex items-end">
                <p>Bridge engineering.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Services;
