const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },

    age:{
        type: Number,
        required: true,
        min: 18,
        max: 65
    },

    createdAt:{
        type: Date,
        default: Date.now
    },

    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const usermodel= model("user",userSchema);

module.exports = usermodel;