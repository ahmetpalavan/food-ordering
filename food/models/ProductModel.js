import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      maxlength: 60,
    },
    desc: {
      type: String,
      required: [true, "Please provide a description"],
      maxlength: 200,
    },
    prices: {
      type: [Number],
      required: [true, "Please provide prices"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category"],
    },
    img: {
      type: String,
      required: [true, "Please provide an image"],
    },
    extraOptions: {
      type: [
        {
          text: { type: String },
          price: { type: Number },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
