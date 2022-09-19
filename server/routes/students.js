const express =  require("express");
const router=express.Router();
const studentController=require("../controllers/studentsController");

//view all record
router.get("/",studentController.view);

//Add new records
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.save);

//update Records
router.get("/edituser/:id",studentController.edituser);
router.post("/edituser/:id",studentController.edit);

//Delete Records
router.get("/deleteuser/:id",studentController.delete);




module.exports=router;