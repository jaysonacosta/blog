import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src/public/posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export default function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs;

  return posts;
}
