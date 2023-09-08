import express from "express";
const router = express.Router();
import {
  createBook,
  getAllBook,
  getABook,
  updateBook,
  delBook,
} from "../controllers/bookController.js";

// Create a new book & Get all books
router.route("/").post(createBook).get(getAllBook);

// Get a one books & update books & delete books
router.route("/:id").get(getABook).put(updateBook).delete(delBook);

export default router;
