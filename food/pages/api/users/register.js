import dbConnect from "../../../util/dbConnect";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  await dbConnect();
  const body = req.body;
  const user = await User.findOne({
    email: body.email,
  });

  user ? res.status(200).json(user) : res.status(404).json({ message: "User not found" });
  try {
    const newUser = await User.create(body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
    await newUser.save();

    res.status(200).json(newUser);
  } catch (err) {
    console.log(err,"hataVar");
  }
};

export default handler;
