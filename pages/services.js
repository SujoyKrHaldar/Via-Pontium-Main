import Head from "next/head";
import Layout from "../components/layout/Layout";
import ServiceLanding from "../components/static/service/ServiceLanding";
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

export default function Service({ projects }) {
  return (
    <>
      <Head>
        <title>Service - Via Pontium</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ServiceLanding />
      </Layout>
    </>
  );
}
