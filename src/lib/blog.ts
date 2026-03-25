import fs from 'node:fs/promises';
import path from 'node:path';

const POSTS_PATH = path.resolve('src/data/blogPosts.json');
const CATS_PATH = path.resolve('src/data/categories.json');

export interface Post {
  id: string;
  category: string;
  categoryName: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: string; // New field for full article
  author?: string;
}

export interface Category {
  id: string;
  name: string;
}

// POSTS
export async function getPosts(): Promise<Post[]> {
  try {
    const data = await fs.readFile(POSTS_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function getPostById(id: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find(p => p.id === id);
}

export async function addPost(post: Post): Promise<void> {
  const posts = await getPosts();
  posts.unshift(post);
  await fs.writeFile(POSTS_PATH, JSON.stringify(posts, null, 2), 'utf-8');
}

export async function updatePost(id: string, updatedData: Partial<Post>): Promise<void> {
  const posts = await getPosts();
  const index = posts.findIndex(p => p.id === id);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedData };
    await fs.writeFile(POSTS_PATH, JSON.stringify(posts, null, 2), 'utf-8');
  }
}

export async function deletePost(id: string): Promise<void> {
  const posts = await getPosts();
  const filtered = posts.filter(p => p.id !== id);
  await fs.writeFile(POSTS_PATH, JSON.stringify(filtered, null, 2), 'utf-8');
}

// CATEGORIES
export async function getCategories(): Promise<Category[]> {
  try {
    const data = await fs.readFile(CATS_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // Return defaults if file doesn't exist
    return [
      { id: 'normativa', name: 'Normativa SIEX y PAC' },
      { id: 'tecnologia', name: 'Tecnología de Precisión' },
      { id: 'gestion', name: 'Gestión de Explotación' }
    ];
  }
}

export async function saveCategories(categories: Category[]): Promise<void> {
  await fs.writeFile(CATS_PATH, JSON.stringify(categories, null, 2), 'utf-8');
}
