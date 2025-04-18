import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
    {
        user_name:{
            type:String,
            required:true,
            unique:true,
            lowecase:true,
            trim:true,
            index:true,
        },
        password:{
            type: String,
            required : [true, 'password is required']
        },
        // mobile_number: {
        //     type: String,
        //     maxlength: 15,
        //     default: null,
        // },
        // funds_secret_key: {
        //     type: String,
        //     maxlength: 255,
        //     default: null,
        // },
        // id_card_number: {
        //     type: String,
        //     maxlength: 50,
        //     default: '1212',
        // },
        // country: {
        //     type: String,
        //     maxlength: 100,
        //     default: null,
        // },
        // account_password: {
        //     type: String,
        //     maxlength: 100,
        //     default: null,
        // },
        // referral_code: {
        //     type: String,
        //     maxlength: 6,
        //     unique: true,
        //     default: null,
        // },
        // blocked: {
        //     type: Boolean,
        //     default: false,
        // },
        // block_reason: {
        //     type: String,
        //     default: null,
        // },
    },
    {
        timestamps : true
    }
)

export const User = mongoose.model("User", userSchema)