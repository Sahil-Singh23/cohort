const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
  const token = req.headers.token;

  const user = jwt.verify(token, process.env.JWT_USER_SECRET);

  if (user) {
    req.userId = user.userId;
    next();
  } else {
    res.status(403).json({
      message: "You are not signed in",
    });
  }
};

module.exports = {
  userMiddleware,
};
