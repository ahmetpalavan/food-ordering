import dbConnect from "../../../util/dbConnect";
import Category from "../../../models/Category";

const handler = async (req, res) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const categories = await Category.find({});
      res.status(200).json(categories);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
  if (method === "POST") {
    try {
      const category = await Category.create(req.body);
      res.status(201).json({ success: true, data: category });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
};

export default handler;
