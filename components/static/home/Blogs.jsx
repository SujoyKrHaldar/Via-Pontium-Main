import BlogCard from "../../design/card/BlogCard";
import Container from "../../layout/Container";

function Blogs() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="absolute w-full h-1/2 inset-0 bg-gray-100"></div>
        <Container>
          <h2>
            Latest <span className="font-bold">News</span>
          </h2>

          <div className="grid grid-cols-3 gap-4 my-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </Container>
      </section>
    </>
  );
}

export default Blogs;
