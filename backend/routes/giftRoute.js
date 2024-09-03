
import express from 'express'
import { addGift, listGift, removeGift, updateGift } from "../controllers/giftController.js"
import multer from "multer"

const giftRouter = express.Router();

// image storage engine 

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req,file,cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

giftRouter.post("/add", upload.single("image"), addGift)
giftRouter.get("/list", listGift)
giftRouter.post("/remove", removeGift)
giftRouter.post("/edit",upload.single("image"), updateGift)

export default giftRouter;
