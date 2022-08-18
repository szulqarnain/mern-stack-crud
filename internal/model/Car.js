const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:true
    },
    name: {
        type:String,
        required:true
    },
    model: {
        type:String,
        required:true
    },
    color: {
        type:String,
        required:true
    },
    registrationNo: {
        type:String,
        required:true
    }

}, { timestamps: true });


const Car =   mongoose.model(`Car`, carSchema);
module.exports = {carSchema, Car};
