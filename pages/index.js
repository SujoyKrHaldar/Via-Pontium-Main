import Head from "next/head";
import Layout from "../components/layout/Layout";
import About from "../components/static/home/About";
import Blogs from "../components/static/home/Blogs";
import Landing from "../components/static/home/Landing";
import Objective from "../components/static/home/Objective";
import ProjectList from "../components/static/home/ProjectList";
import Services from "../components/static/home/Services";
import { getAllProjects } from "../config/query";
import { sanityClient } from "../config/sanity";

export const getServerSideProps = async () => {
  const projects = await sanityClient.fetch(getAllProjects);

  return {
    props: {
      projects,
    },
  };
};

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Welcome to Via Pontium</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
        {/* <About /> */}
        <Objective />
        <Services />
        <Blogs />
        <ProjectList project={projects} />
      </Layout>
    </>
  );
}
