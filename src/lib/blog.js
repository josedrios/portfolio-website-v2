import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDir = path.join(process.cwd(), '/src/content/blog');

export function getAllPosts() {
  const files = fs.readdirSync(blogDir);
  return files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      ...data,
    };
  });
}

export async function getPostBySlug(slug) {
  const filePath = path.join(blogDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    contentHtml,
    ...data,
  };
}