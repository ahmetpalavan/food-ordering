import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";
import bcrypt from "bcryptjs";

const handler = async (req, res, id) => {
  console.log(req.body, "req.body");
  await dbConnect();
  const { method, query } = req;

  if (method === "GET") {
    try {
      const user = await User.findById(query.id);
      res.status(200).json(user);
    } catch (err) {
      console.log(err, "hata");
    }
  }

  if (method === "PUT") {
    try {
      if(req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.body.passwordConfirm = await bcrypt.hash(req.body.passwordConfirm, 10);
      }
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error, "error");
    }
  }
};

export default handler;
