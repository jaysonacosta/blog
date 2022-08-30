import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

import PostType from "types/post";

import Layout from "@components/Layout";
import Post from "@components/Post";

import getAllPosts from "lib/posts";

type Props = {
  allPosts: PostType[];
};

const Home: NextPage<Props> = (props: Props) => {
  const { allPosts } = props;

  return (
    <>
      <Head>
        <title>Jayson Acosta</title>
      </Head>
      <Layout>
        <section>
          <div className="flex flex-col gap-y-4 container mx-auto">
            <h1 className="text-2xl dark:text-slate-200">Recently Published</h1>
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
        </section>
      </Layout>
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts(["title", "slug", "excerpt"]);

  return {
    props: {
      allPosts,
    },
  };
};

export default Home;
