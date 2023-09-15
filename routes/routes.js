import express from "express"
import { router as routesCrud } from "./crud.js";

const routes = express()

routes.use("/", routesCrud)

export { routes }