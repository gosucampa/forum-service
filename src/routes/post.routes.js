import { Router } from 'express';
import {
  createPost,
  getPostByID,
  addLike,
  findPostByTags,
  findPostByAuthor,
  addComment,
  updatePost,
  findPostByPeriod,
  deletePost,
} from '../controllers/post.controller.js';

const router = Router();

router.post('/post/:user', createPost);
router.get('/post/:id', getPostByID);
router.patch('/post/:id/like', addLike);
router.get('/posts/author/:author', findPostByAuthor);
router.patch('/post/:id/comment/:commenter', addComment);
router.delete('/post/:id', deletePost);
router.get('/posts/tags', findPostByTags);
router.get('/posts/period', findPostByPeriod);
router.patch('/post/:id', updatePost);

export default router;