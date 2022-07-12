import ProjectCard from "../../design/card/ProjectCard";
import Button from "../../design/others/Button";
import Container from "../../layout/Container";

function ProjectList({ project }) {
  return (
    <>
      <section className="py-16">
        <Container>
          <h2 className="font-bold">Our works</h2>

          <div className="grid grid-cols-3 gap-4 my-4">
            {project.map((data) => (
              <ProjectCard key={data.id} data={data} />
            ))}
          </div>

          <Button href="/projects" text="View more" />
        </Container>
      </section>
    </>
  );
}

export default ProjectList;
