import React from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>Jayson Acosta</title>
      </Head>
      <Layout>
        <section className="grid grid-cols-2 gap-16 w-full">
          <div>
            <h1 className="text-2xl pb-5 text-slate-200">Recently Published</h1>
            {allPosts.map((post) => {
              return (
                <Post
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              );
            })}
          </div>
          <div>
            <h2 className="text-2xl pb-5 text-slate-200">Popular Content</h2>
          </div>
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "slug", "author", "excerpt"]);

  return {
    props: {
      allPosts,
    },
  };
};

export default Home;
