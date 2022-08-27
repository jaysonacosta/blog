import React from "react";
import type { NextPage } from "next";

import Post from "types/post";

import Layout from "@components/Layout";

import getAllPosts from "lib/posts";

type HomeProps = {
  allPosts: Post[];
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { allPosts } = props;

  return (
    <>
      <Layout>Home</Layout>
      {allPosts &&
        allPosts.map((post) => {
          return <p key={post.slug}>{post.slug}</p>;
        })}
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "slug", "author"]);

  return {
    props: {
      allPosts,
    },
  };
};

export default Home;
