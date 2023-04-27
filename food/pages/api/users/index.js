import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
  res.status(200).json({
    message: "Connect to API, Congrats!F",
  });
  if (req.method === "GET") {
    res.status(200).json({
      message: "Connect to API, Congrats!",
    });
  }
};

export default handler;
