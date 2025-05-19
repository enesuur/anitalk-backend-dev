import { Request, Response, NextFunction } from "express";

// TODO: ALIAS HTTP_CODES, MESSAGES. CACHE MESSAGES, AUTH , MIDDLEWARE FOR POST METHODS
// TODO : we need to add prefix such as v1, implement jest
interface Post {
  id: number;
  title: string;
  content: string;
  author?: string;
}

let posts: Post[] = [];
let postIdCounter = 1;

function getAllPosts(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(posts);
  } catch (error) {
    next(error);
  }
}

function getPostById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const post = posts.find((p) => p.id === id);
    if (!post) return res.status(404).json({ error: "Post not found." });
    res.json(post);
  } catch (error) {
    next(error);
  }
}

function createPost(req: Request, res: Response, next: NextFunction) {
  try {
    const { title, content, author } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required." });
    }
    const newPost: Post = {
      id: postIdCounter++,
      title,
      content,
      author,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
}

function updatePost(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const { title, content, author } = req.body;
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1)
      return res.status(404).json({ error: "Post not found." });

    posts[postIndex] = {
      ...posts[postIndex],
      title: title ?? posts[postIndex].title,
      content: content ?? posts[postIndex].content,
      author: author ?? posts[postIndex].author,
    };

    res.json(posts[postIndex]);
  } catch (error) {
    next(error);
  }
}

function deletePost(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1)
      return res.status(404).json({ error: "Post not found." });

    posts.splice(postIndex, 1);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

const PostController = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

export default PostController;
