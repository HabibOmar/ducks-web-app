import e from "express";
import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";
import { updatePost } from "../../client/src/api/index.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

export default router;
