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

router.post('/forum/post/:user', createPost);
router.get('/forum/post/:id', getPostByID);
router.patch('/forum/post/:id/like', addLike);
router.get('/forum/posts/author/:author', findPostByAuthor);
router.patch('/forum/post/:id/comment/:commenter', addComment);
router.delete('/forum/post/:id', deletePost);
router.get('/forum/posts/tags', findPostByTags);
router.get('/forum/posts/period', findPostByPeriod);
router.patch('/forum/post/:id', updatePost);

export default router;