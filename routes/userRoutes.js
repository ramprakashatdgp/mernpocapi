const express = require("express");
const { getUser, addUser,createUser,updateUser,getUserDetail,deleteUser } = require("../controllers/userCtrl");

//routes router object
const router = express.Router();

//routes

//Create user
router.post("/create-user", createUser);

//update detail
router.put("/update-user", updateUser);
//Get user detail

router.get("/get-user-detail", getUserDetail);

//delete user detail
router.post("/delete-user", deleteUser);

//GET USER ||  METHOD = GET
router.get("/", getUser);



//POST USER || METHOD POST
router.post("/add-user", addUser);

//export routes
module.exports = router;
