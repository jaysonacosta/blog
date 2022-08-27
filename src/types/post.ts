import Author from "./author";

interface Post {
  title: string;
  date: string;
  slug: string;
  author: Author;
  content: string;
}

export default Post;
