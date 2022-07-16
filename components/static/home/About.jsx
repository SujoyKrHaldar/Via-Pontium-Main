import Button from "../../design/others/Button";
import Container from "../../layout/Container";
import Img from "../../tools/Img";

function About() {
  return (
    <>
      <section className="py-16 bg-white">
        <Container>
          <div className="mb-4 h-[500px] flex items-center">
            <div className="max-w-[750px] mx-auto text-center">
              <p>About us</p>
              <h2 className="font-bold">
                A group of young and energetic professionals, with proven track
                record, coming togetherto work and develop the infrastructural
                needs of the country by rendering services through engineering
                consultancies.
              </h2>
            </div>
          </div>
          <div className="xl:flex items-center justify-between gap-8 my-16 bg-gray-100">
            <div className="flex-1  mt-8 xl:mt-0 xl:p-8">
              <p className="mb-8">
                As individuals, each one of us has worked hands on
                infrastructure projects for clients both domestic and
                international. Our team comprises has the capability of
                delivering engineering design for Highway and Railway bridges,
                Highway & Railway alignment and pavement designs, geotechnical
                design, quantity estimation, 3D CAD modelling, drawings and
                rebars detailing. Our team has experience of working on DPR and
                EPC projects for Government clients and contractors. Our team
                members have successfully delivered projects for Indian clients
                like NHAI, NHPC, IRCON, NBCC, Kochi Metro Rail Corporation,
                BRPNNL and other private firms like L&T, HCC, IL&FS, Oriental,
                IVRCL, Afcons, Gammon, SP Singhla, Simplex Projects, Gawar
                Construction, Patel Infra, Era Infra, Sadbhav Engineering etc.
                We have knowledge in IRC, IRS, Eurocodes and AASHTO. Working
                with overseas clients, we have delivered projects for UK,
                Denmark, South Africa, Middle East & Africa.
              </p>

              <Button href="/about" text="Read more" />
            </div>

            {/* <div className="flex-1 w-full h-[300px] md:h-[500px] xl:max-w-[360px] p-8 bg-white shadow-xl">
              <Img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Landing bridge"
              />
            </div> */}
          </div>
        </Container>
      </section>
    </>
  );
}

export default About;
