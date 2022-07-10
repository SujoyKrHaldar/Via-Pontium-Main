import Head from "next/head";
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
  console.log(projects);
  return (
    <>
      <Head>
        <title>Welcome to Via Pontium</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="bg-green-500">Hello world</h1>
    </>
  );
}
