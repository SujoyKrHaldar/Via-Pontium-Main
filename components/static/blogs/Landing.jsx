import Container from "../../layout/Container";
import Img from "../../tools/Img";

function Landing() {
  return (
    <>
      <section className="py-16 w-full h-[60vh]">
        <div className="absolute w-full h-full inset-0">
          <Img src="/home.jpg" alt="Landing bridge" />
        </div>
        <Container className="flex items-center justify-center">
          <h1>Blogs</h1>
        </Container>
      </section>
    </>
  );
}

export default Landing;
