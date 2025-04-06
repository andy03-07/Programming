const {Schema,model} = require("mongoose");

const myproductschema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 3
    },

    price:{
        type: Number,
        required: true,
        min: 0
    },

    description:{
        type: String,
        required: true,
        minlength: 10
    },

    category:{
        type: String,
        required: true,
        enum: ["Electronics", "Clothing", "Books", "Home", "Others"]
    },


    createdAt:{
        type: Date,
        default: Date.now
    },

    // updatedAt:{
    //     type: Date
    // }
});

const Productmodel=model("myproduct",myproductschema);

module.exports = Productmodel;