const roleModel = require("./../../db/models/role");

const authorization = async (req, res, next) => {
  try {

     console.log(req.token.role);
    // const relatedId = req.token.role;
    // const result = await roleModel.findById(relatedId);

    if (req.token.role === "Admin") {
      next();
    } else {
      return res.status(403).json({ message: "forbidden" });
    }
  } catch (error) {
    res.status(403).json(error);
  }
};

module.exports = authorization;
