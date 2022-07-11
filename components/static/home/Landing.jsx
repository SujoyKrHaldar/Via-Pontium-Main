import Container from "../../layout/Container";
import Img from "../../tools/Img";

function Landing() {
  return (
    <>
      <section className="py-36">
        <Container>
          <div className="max-w-[37rem] py-16 text-center mx-auto space-y-3">
            <p className="font-bold">Welcome to Via Pontium</p>
            <h1>
              Welcome to the <span className="font-bold">Next Chapter</span> in
              the <span className="font-bold">Construction</span>
            </h1>
            <p className="max-w-md mx-auto">
              You are actually contructing what your head understand about what
              your eyes saw.
            </p>
          </div>
        </Container>

        <div className="w-full h-[650px]">
          <Img
            src="https://images.unsplash.com/photo-1522775559573-2f76d540932b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt="Landing bridge"
          />
        </div>
      </section>
    </>
  );
}

export default Landing;
