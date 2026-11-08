import {getPostById} from "../services/post.service.js";

export const hasRole = role => (req, res, next) => {
  const check = req.principal.roles.includes(role.toUpperCase().trim());
  return check ? next() : res.status(403).json({ message: 'Access denied' });
}

export const isOwner = paramName => (req, res, next) => req.params[paramName] === req.principal.userName ? next() : res.status(403).json({message: 'Access denied'});

export const isOwnerOrHasRole = (paramName, role ) => (req, res, next) => {
  const isOwner = req.params[paramName] === req.principal.userName;
  const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
  return isOwner || hasRole ? next() : res.status(403).json({message: 'Access denied'});
}

export const isPostAuthor = (postIdParam = 'id') => async (req, res, next) =>
{
  const post = await getPostById(req.params[postIdParam]);
  return  post.author === req.principal.userName ? next() : res.status(403).json({message: 'Access denied'});
}

export const isPostAuthorOrHasRole = (postIdParam = 'id', role) => async (req, res, next) => {
  const post = await getPostById(req.params[postIdParam]);
  const isAuthor = post.author === req.principal.userName;
  const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
  return isAuthor || hasRole ? next() : res.status(403).json({message: 'Access denied'});
}