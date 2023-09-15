import { Router } from "express"
import { crudController } from "../controllers/crudCrontroller.js"

const router = Router()

router.route("/post").post((req,res) => {
    return crudController.post(req, res)
})

router.route("/get").get((req, res) => {
    return crudController.get(req, res)
})

router.route("/put/:id").put((req, res) => {
    return crudController.put(req, res)
})

router.route("/delete/:id").delete((req, res) => {
    return crudController.delete(req, res)
})

export { router }