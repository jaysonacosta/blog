import React from "react";

import type { NextPage } from "next";
import Layout from "@components/Layout";

import getAllPosts from "lib/posts";

interface HomeProps {
  allPosts: string[];
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { allPosts } = props;

  return (
    <>
      <Layout>Home</Layout>
      {allPosts &&
        allPosts.map((post) => {
          return <p key={post}>{post}</p>;
        })}
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts,
    },
  };
};

export default Home;
