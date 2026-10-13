import * as service from '../services/post.service.js';

export const createPost = async (req, res) => {
  const post = await service.createPost({
    ...req.body,
    author: req.params.user,
  });

  if (post) {
    return res.status(201).json(post);
  } else {
    return res.status(409).send();
  }
};

export const getPostByID = async (req, res) => {
  const post = await service.getPostByID(req.params.id);

  if (post) {
    return res.json(post);
  } else {
    return res.status(404).send();
  }
};

export const addLike = async (req, res) => {
  const success = await service.addLike(req.params.id);

  if (success) {
    return res.status(204).send();
  } else {
    return res.status(404).send();
  }
};

export const findPostByTags = async (req, res) => {
  const posts = await service.findPostByTags(req.query.values);
  return res.json(posts);
};

export const findPostByAuthor = async (req, res) => {
  const posts = await service.findPostByAuthor(req.params.author);
  return res.json(posts);
};

export const addComment = async (req, res) => {
  const post = await service.addComment(
    req.params.id,
    req.params.commenter,
    req.body.message
  );

  if (post) {
    return res.json(post);
  } else {
    return res.status(404).send();
  }
};

export const updatePost = async (req, res) => {
  const post = await service.updatePost(req.params.id, req.body);

  if (post) {
    return res.json(post);
  } else {
    return res.status(404).send();
  }
};

export const findPostByPeriod = async (req, res) => {
  const posts = await service.findPostByPeriod(
    req.query.dateFrom,
    req.query.dateTo
  );

  return res.json(posts);
};

export const deletePost = async (req, res) => {
  const post = await service.deletePost(req.params.id);

  if (post) {
    return res.json(post);
  } else {
    return res.status(404).send({
      timestamp: new Date().toISOString(),
      status: 404,
      error: 'Not Found',
      message: `Post with id = ${req.params.id} not found`,
      path: req.path,
    });
  }
};