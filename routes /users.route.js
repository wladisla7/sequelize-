const userRouter = require('express').Router();

userRouter.get("/", (req, res) => {
    console.log("users");
    res.send("users");
});

 
module.exports = userRouter;