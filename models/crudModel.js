import 
    mongoose,
    { Schema } 
from "mongoose"

const crudSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        }
    },
    {timestamps : true}
)

const crudModel = mongoose.model("crud",crudSchema)

export { crudModel }