import Head from "next/head";
import Content from "../../components/dynamic/project/Content";
import Landing from "../../components/dynamic/project/Landing";
import Layout from "../../components/layout/Layout";
import {
  getAllProjectSlugs,
  getOtherProjects,
  getProjectDataBySlug,
} from "../../config/query";
import { sanityClient } from "../../config/sanity";

export async function getStaticPaths() {
  const allSlugs = await sanityClient.fetch(getAllProjectSlugs);

  const paths = allSlugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await sanityClient.fetch(getProjectDataBySlug, {
    slug: params.slug,
  });

  const otherData = await sanityClient.fetch(getOtherProjects, {
    slug: params.slug,
  });

  if (!data) {
    return {
      redirect: {
        destination: "/projects",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data,
      otherData,
    },
    revalidate: 10,
  };
}

function slug({ data, otherData }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Project - {data.title} by Via pontium</title>
        <meta name="description" content={data?.assignment} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing data={data} />
        <Content data={data} />
      </Layout>
    </>
  );
}

export default slug;
