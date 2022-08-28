import React from "react";
import type { NextPage } from "next";

import Layout from "@components/Layout";
import getAllPosts, { getPostBySlug, type Items } from "lib/posts";

type Props = {
  post: Items;
};

const Post: NextPage<Props> = ({ post }: Props) => {
  return (
    <Layout>
      <h1 className="text-3xl pb-5">{post.title}</h1>
      <section>
        <p>{post.content}</p>
      </section>
    </Layout>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const post = getPostBySlug(`${slug}.md`, ["title", "content"]);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export default Post;
