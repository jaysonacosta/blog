/* eslint-disable react/no-danger */
import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "@components/Layout";
import getAllPosts, { getPostBySlug } from "lib/posts";
import markdownToHtml from "lib/markdownToHtml";
import getDate from "lib/getDate";

type Props = {
  title: string;
  content: string;
  date: string;
};

const Post: NextPage<Props> = ({ title, content, date }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <h1 className="text-3xl text-center">{title}</h1>
        <br className="py-3" />
        <section className="px-16 leading-relaxed text-lg">
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </section>
        <br className="py-3" />
        <footer>
          <h2 className="px-16 leading-relaxed text-xl font-bold">
            Last Updated: {date}
          </h2>
        </footer>
      </Layout>
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const post = getPostBySlug(`${slug}.md`, ["title", "content", "date"]);
  const content = await markdownToHtml(post.content);
  const date = getDate(post.date);

  return {
    props: {
      ...post,
      content,
      date,
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
