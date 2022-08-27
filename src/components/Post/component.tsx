import React from "react";

type PostProps = {
  title: string;
};

const Post: React.FC<PostProps> = ({ title }) => {
  return (
    <div className="rounded overflow-hidden min-w-[250px] border-solid border-blue-900 border-2">
      <div className="bg-blue-900 p-2">{title}</div>
      <div className="p-2">body</div>
    </div>
  );
};

export default Post;
