import express from "express";
import { getUsers,editUser,deleteUser,addUser,getUserById } from "../controller/user-controller";

const router = express.Router();
router.get('/',getUsers);
router.post("/add",addUser);
router.get('/:id',getUserById);
router.put("/:id",editUser);
router.delete("/:id",deleteUser);

export default router;