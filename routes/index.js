let verifyToken = require('../middelware/auth')

module.exports = (app) => {
    app.use("/user", verifyToken, require("./user"));
    app.use("/auth" , require("./auth"));
    app.use("/admin", require("./admin/index"));
};
