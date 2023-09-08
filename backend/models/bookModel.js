import mongoose from "mongoose";

const booksSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// bookstore = ชื่อ collections
export const Books = mongoose.model("books-store", booksSchema);
