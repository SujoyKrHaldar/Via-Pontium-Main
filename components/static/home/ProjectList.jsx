import Container from "../../layout/Container";

function ProjectList({ project }) {
  return (
    <>
      <section className="">
        <Container>
          <div className="max-w-[37rem] py-16 mx-auto space-y-3 z-20">
            <h2>
              Welcome to the <span className="font-bold">Next Chapter</span> in
              the <span className="font-bold">Construction</span>
            </h2>

            <div className="">
              {project.map((data) => (
                <p>{data.title}</p>
              ))}
            </div>

            {/* <Button href="/" text="Read more" /> */}
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProjectList;
