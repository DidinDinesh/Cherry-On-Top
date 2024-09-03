import express from 'express'
import { addCombo, listCombo, removeCombo, updateCombo } from "../controllers/comboController.js"
import multer from "multer"

const comboRouter = express.Router();

// image storage engine 

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

comboRouter.post("/add", upload.single("image"), addCombo)
comboRouter.get("/list", listCombo)
comboRouter.post("/remove", removeCombo)
comboRouter.post("/edit", upload.single("image"), updateCombo)

export default comboRouter;
