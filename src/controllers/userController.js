import express from "express";
import {
  saveUser,
  getAllUsers,
  update,
  deleteById,
} from "../services/userService";
import validators from "../models/view-models";
import { handleValidation } from "../middlewares/index";

const router = express.Router();

const getHandler = async (req, res, next) => {
  // const params = JSON.stringify(req.query.id );
  // res.send("hello viewers " + params);
  // res.send("hello viewers" + req.query.id);
  try {
    const users = await getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    return next(error, req, res);
  }
};

const postHandler = async (req, res, next) => {
  try {
    const body = req.body;
    const id = await saveUser(body);
    res.status(201).send(id);
  } catch (error) {
    return next(error, req, res);
  }
};

const putHandler = async (req, res, next) => {
  try {
    const body = req.body;
    const id = await update(body);
    res.status(200).send(id);
  } catch (error) {
    return next(error, req, res);
  }
};

const deleteHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    await deleteById(id);
    res.status(200).send("User deleted");
  } catch (error) {
    return next(error, req, res);
  }
};

router.get("/", getHandler);
router.post("/", handleValidation(validators.userSchemaValidate), postHandler);
router.put("/", putHandler);
router.delete("/:id", deleteHandler);

export default router;
