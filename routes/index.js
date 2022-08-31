let verifyToken = require('../middelware/auth')

module.exports = (app) => {
    app.use("/user", verifyToken, require("./user"));
    app.use("/auth" , require("./auth"));
    app.use("/catalogue", require("./catalogue"));
    app.use("/book", require("./book"));

    app.use("*", function (req, res) {
        res.render()
    })
};
