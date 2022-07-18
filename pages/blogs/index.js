import Head from "next/head";
import Landing from "../../components/static/blogs/Landing";
import BlogList from "../../components/static/blogs/BlogList";

import Layout from "../../components/layout/Layout";

function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs - Via Pontium</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        <BlogList />
      </Layout>
    </>
  );
}

export default Blogs;
