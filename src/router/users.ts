import express from "express";
import { getAllUsers, deleteUser, updateUser } from "./../controllers/users";
import { isAuthenticated, isOwner } from '../middlewares';
import { deleteUserById } from "../services/profile/user";

const router = express.Router();

export default (router: express.Router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
  router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
} 