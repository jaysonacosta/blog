import React from "react";
import Link from "next/link";

type PostProps = {
  title: string;
  slug: string;
  excerpt: string;
};

const Post: React.FC<PostProps> = ({ title, slug, excerpt }) => {
  return (
    <div className="rounded overflow-hidden min-w-[250px] border-solid border-blue-900 border-2 mb-2">
      <div className="bg-blue-900 p-2">
        <Link href={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div className="p-2">{excerpt}</div>
    </div>
  );
};

export default Post;
