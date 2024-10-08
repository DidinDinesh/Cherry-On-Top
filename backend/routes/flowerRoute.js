
import express from 'express'
import { addFlower, listFlower, removeFlower, updateFlower } from "../controllers/flowerController.js"
import multer from "multer"

const flowerRouter = express.Router();

// image storage engine 

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

flowerRouter.post("/add", upload.single("image"), addFlower)
flowerRouter.get("/list", listFlower)
flowerRouter.post("/remove", removeFlower)
flowerRouter.post("/edit", upload.single("image"), updateFlower)

export default flowerRouter;
