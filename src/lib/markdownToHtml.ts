import { remark } from "remark";
import html from "remark-html";

const markdownToHtml = async (markdown: string) => {
  const output = await remark().use(html).process(markdown);
  return output.toString();
};

export default markdownToHtml;
