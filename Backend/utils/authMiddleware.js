const jwt = require("jsonwebtoken");
// Middleware function to validate JWT tokens

function validateToken(req, res, next) {
  var token = req.headers.authorization;

  token = token.split(" ")[1]; //splitting the Bearer token

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token" });
    }

    // If the token is valid, save the decoded information for later use

    req.user = decoded;

    next();
  });
}

module.exports = validateToken;
