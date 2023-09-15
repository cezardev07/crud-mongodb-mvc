import { crudModel } from "../models/crudModel.js";

const crudController = {
    post: async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                email: req.body.email
            }

            if(!user.name || !user.email){
                return res.status(400).json({
                    status: 400,
                    mensage: "error bad request"
                })
            }

            const createdUser = await crudModel.create(user)

            return res.json({
                status: 200,
                mensage: "User created with sucess!",
                createdUser
            })
        } catch (error) {
            console.log("[ ERROR ] -> " + error)
        }
    },

    get: async (_req, res) => {
        try {
            const users = await crudModel.find()
            
            if(!users){
                return res.status(200).json({
                    status: 200,
                    mensage: "ops, no users!"
                })
            }

            return res.status(200).json({
                status: 200,
                users
            })
        } catch (error) {
            console.log("[ ERROR ] -> " + error)
        }
    },
    
    put: async (req, res) => {
        try {
            const id = req.params.id

            const newDataUser = {
                name: req.body.name,
                email: req.body.email
            }

            if(!newDataUser.name || !newDataUser.email){
                return res.status(400).json({
                    status: 400,
                    mensage: "error bad request"
                })
            }

            const user = await crudModel.findById(id)

            if(!user){
                return res.status(404).json({
                    status: 404,
                    mensage: "ops, user not default!"
                }) 
            }

            const updateDataUser = await crudModel.findByIdAndUpdate(id, newDataUser)
            
            return res.status(200).json({
                status: 200,
                prevUpdateDataUser: updateDataUser,
                nextUpdateDataUser: newDataUser
            })

        } catch (error) {
            console.log("[ ERROR ] -> " + error)
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id

            const user = await crudModel.findById(id)

            if(!user){
                return res.status(404).json({
                    status: 404,
                    mensage: "ops, user not default!"
                }) 
            }

            const deletedUser = await crudModel.findByIdAndDelete(id)
            
            return res.status(200).json({
                status: 200,
                mensage: "user deleted with sucess!",
                deletedUser
            })
        } catch (error) {
            console.log("[ ERROR ] -> " + error)
        }
    }
}

export { crudController }