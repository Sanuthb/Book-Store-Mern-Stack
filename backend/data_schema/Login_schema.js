import mongoose from 'mongoose';

const login = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const LoginModel = mongoose.model('login',login)