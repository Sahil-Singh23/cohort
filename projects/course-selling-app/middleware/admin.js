const jwt = require("jsonwebtoken");

const adminMiddleware = async (req, res, next) => {
  const token = req.headers.token;

  const user = jwt.verify(token, process.env.JWT_ADMIN_SECRET);

  if (user) {
    req.userId = user.userId;
    next();
  } else {
    res.status(403).json({
      message: "Admin is not signed in",
    });
  }
};

module.exports = {
  adminMiddleware,
};
