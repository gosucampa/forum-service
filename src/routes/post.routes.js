import { Router } from 'express';
import {
  createPost,
  getPostById,
  addLike,
  getPostsByTags,
  getPostsByAuthor,
  addComment,
  updatePost,
  getPostsByPeriod,
  deletePost,
} from '../controllers/post.controller.js';
import validate from '../middlewares/validation.middleware.js'

const router = Router();

router.post('/post/:user', createPost);
router.get('/post/:id', getPostById);
router.patch('/post/:id/like', addLike);
router.get('/posts/author/:author', getPostsByAuthor);
router.patch('/post/:id/comment/:commenter', addComment);
router.delete('/post/:id', deletePost);
router.get('/posts/tags', getPostsByTags);
router.get('/posts/period', getPostsByPeriod);
router.patch('/post/:id', updatePost);

export default router;