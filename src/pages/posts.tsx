import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import Layout from "@components/Layout";

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Layout>Posts</Layout>
    </>
  );
};

export default Posts;
