import BlogCard from "../../design/card/BlogCard";
import Container from "../../layout/Container";

function BlogList() {
  return (
    <>
      <section className="p-16">
        <Container className="grid grid-cols-3 gap-4 my-4 ">
          <BlogCard />
          <BlogCard />

          <BlogCard />

          <BlogCard />

          <BlogCard />
        </Container>
      </section>
    </>
  );
}

export default BlogList;
