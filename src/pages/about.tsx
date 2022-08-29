import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import Layout from "@components/Layout";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>About</Layout>
    </>
  );
};

export default About;
