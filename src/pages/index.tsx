import React from "react";
import type { NextPage } from "next";

import PostType from "types/post";

import Layout from "@components/Layout";
import Post from "@components/Post";

import getAllPosts from "lib/posts";

type HomeProps = {
  allPosts: PostType[];
};

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const { allPosts } = props;

  return (
    <Layout>
      <p className="text-3xl pb-5">Welcome! 🔥👋</p>
      {allPosts &&
        allPosts.map((post) => {
          return <Post key={post.slug} title={post.slug} />;
        })}
    </Layout>
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
