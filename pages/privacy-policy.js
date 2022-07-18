import Head from "next/head";
import Layout from "../components/layout/Layout";

function privacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy policy - Via Pontium</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="h-screen py-28">Privacy policy</h1>
      </Layout>
    </>
  );
}

export default privacyPolicy;
