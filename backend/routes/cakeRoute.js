import express from 'express'
import { addCake, listCake, removeCake, updateCake } from "../controllers/cakeController.js"
import multer from "multer"

const cakeRouter = express.Router();

// image storage engine 

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

cakeRouter.post("/add", upload.single("image"), addCake)
cakeRouter.get("/list",listCake)
cakeRouter.post("/remove",removeCake)
cakeRouter.post("/edit", updateCake)



export default cakeRouter;