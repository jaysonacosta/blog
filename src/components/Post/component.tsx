import React from "react";
import Link from "next/link";

type PostProps = {
  title: string;
  slug: string;
  excerpt: string;
};

const Post: React.FC<PostProps> = ({ title, slug, excerpt }) => {
  return (
    <Link href={`/posts/${slug}`}>
      <a>
        <div className="rounded overflow-hidden border-solid border-blue-900 border-2 hover:border-blue-600 group">
          <div className="bg-blue-900 p-2 group-hover:bg-blue-600 relative">
            {title}
            <span className="absolute invisible translate-y-2 group-hover:translate-y-0 group-hover:visible transition-all ease-in duration-75">
              &nbsp;&rarr;
            </span>
          </div>
          <div className="p-2">{excerpt}</div>
        </div>
      </a>
    </Link>
  );
};

export default Post;
