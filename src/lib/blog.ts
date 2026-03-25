import fs from 'node:fs/promises';
import path from 'node:path';

const DATA_PATH = path.resolve('src/data/blogPosts.json');

export interface Post {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export async function getPosts(): Promise<Post[]> {
  try {
    const data = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function addPost(post: Post): Promise<void> {
  const posts = await getPosts();
  posts.unshift(post); // Add to the beginning
  await fs.writeFile(DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8');
}

export async function deletePost(id: string): Promise<void> {
  const posts = await getPosts();
  const filtered = posts.filter(p => p.id !== id);
  await fs.writeFile(DATA_PATH, JSON.stringify(filtered, null, 2), 'utf-8');
}
