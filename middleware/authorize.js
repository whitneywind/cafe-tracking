import jwt from "jsonwebtoken";

const authorize = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.send("error with header.auth");
  }
  const token = authHeader.split(" ")[1];

  try {
    // attaching the user object to the req
    // this way the cafe to be submitted will have access to the userId to use for the "createdBy" property
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    res.status(400).json({ "auth errror": "eerror!" });
  }
};

export default authorize;
