import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import PostType from "types/post";

import Layout from "@components/Layout";
import Post from "@components/Post";

import getAllPosts from "lib/posts";

type Props = {
  allPosts: PostType[];
};

const Posts: NextPage<Props> = (props: Props) => {
  const { allPosts } = props;

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Layout>
        <section className="flex flex-col gap-y-4">
          <h1 className="text-2xl dark:text-slate-200">All Posts</h1>
          <div className="grid grid-cols-2 gap-4">
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

export default Posts;
