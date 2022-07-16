import Container from "../../layout/Container";
import LandingImage from "./components/LandingImage";

function Landing() {
  return (
    <>
      <section className="py-24 md:h-auto bg-white">
        <Container>
          <div className="max-w-[37rem] py-16 text-center mx-auto space-y-3 z-20">
            <p className="font-bold">Welcome to Via Pontium</p>
            <h1>
              Welcome to the{" "}
              <span className="text-[#3f75c1] font-bold">Next Chapter</span> in
              the <span className="text-[#d94a4a] font-bold">Construction</span>
            </h1>
            <p className="max-w-md mx-auto">
              You are actually contructing what your head understand about what
              your eyes saw.
            </p>
          </div>
        </Container>
        <LandingImage />
      </section>
    </>
  );
}

export default Landing;
