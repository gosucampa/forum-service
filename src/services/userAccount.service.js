import * as userAccountRepository from "../repository/userAccount.repository.js";
import bcrypt from "bcrypt";

export const register = async (user) => {
  try {
    return await userAccountRepository.addUser(user);
  } catch (e) {
    throw new Error('User already exists');
  }
}

export const removeUser = async (login) => {
  const userAccount = await userAccountRepository.removeUser(login);
  if (!userAccount) {
    throw new Error(`User with login ${login} not found`);
  }
  return userAccount;
}

export const updateUser = async (login, updateData) => {
  const userAccount = await userAccountRepository.updateUser(login, updateData);
  if (!userAccount) {
    throw new Error(`User with login '${login}' not found`);
  }
  return userAccount;
}

export const changeRoles = async (login, role, isAddRole) => {
  role = role.toUpperCase();
  const userAccount = isAddRole ? await userAccountRepository.addRole(login, role) : await userAccountRepository.removeRole(login, role);
  if (!userAccount) {
    throw new Error(`User with login '${login}' not found`);
  }
  return userAccount;
}

export const changePassword = async (login, newPassword) => {
  const userAccount = await userAccountRepository.changePassword(login, newPassword);
  if (!userAccount) {
    throw new Error(`User with login '${login}' not found`);
  }
  return userAccount;
}

export const getUser = async (login) => {
  const userAccount = await userAccountRepository.findUser(login);
  if (!userAccount) {
    throw new Error(`User with login '${login}' not found`);
  }
  return userAccount;
}