import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export type Items = {
  [key: string]: string;
};

const postsDirectory = join(process.cwd(), "src/public/posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, slug);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export default function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));

  return posts;
}
