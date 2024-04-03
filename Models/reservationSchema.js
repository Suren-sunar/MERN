import mongoose from "mongoose";
import validator from "validator";

const reservatonSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must content at least 3 characters!"],
        maxLength:[30, "First name cannot exceed 30 character!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[1,"First name must content at least 3 characters!"],
        maxLength:[30, "First name cannot exceed 30 character!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "Provide a valid email"]
    },
    phone:{
        type:Number,
        required:true,
        minLength:[10,"Number must be at least 10 digits"],
        maxLength:[12, "First name cannot exceed 30 character!"]
      
    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }

})

export const Reservation = mongoose.model("Reservation",reservatonSchema)