import React from "react";
import type { NextPage } from "next";

import Layout from "@components/Layout";
import getAllPosts, { getPostBySlug } from "lib/posts";
import markdownToHtml from "lib/markdownToHtml";

type Props = {
  title: string;
  content: string;
};

const Post: NextPage<Props> = ({ title, content }: Props) => {
  return (
    <Layout>
      <h1 className="text-3xl pb-5">{title}</h1>
      <section className="px-16 leading-relaxed text-lg">
        <p dangerouslySetInnerHTML={{ __html: content }} />
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
  const content = await markdownToHtml(post.content);

  return {
    props: {
      ...post,
      content,
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
