const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "Name must be {MINLENGTH} character or longer."]
    },

    type: {
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [3, "Type must be {MINLENGTH} character or longer."]
    },

    description: {
        type: String,
        required: [true, "Description is required."],
        minlength: [3, "Description must be {MINLENGTH} characters or longer."]
    },

    skill1: {
        type: String,
    },

    skill2: {
        type: String,
    },

    skill3: {
        type: String,
    },

}, {timestamps: true});

/**
 * Tell mongoose what we want our model to be called
 * It will take the string and pluralize it for the
 * collection name. The Schema will enforce the
 * structure on this model when we try to create or
 * update it.
 */
// 
const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;



// const PetSchema = new mongoose.Schema({
    //     name: {
    //         type: String,
    //       // "{PATH}" will be replaced with the field name, here that will be "name"
    //         required: [true, "{PATH} must have a pet name."],
    //         minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    //     },
    //     type: {
    //         type: Number,
    //         required: [true, "{PATH} must have a pet name."],
    //         minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    //     },
    //     description: {
    //         required: [true, "{PATH} must have a pet name."],
    //         minlength: [3, "{PATH} must be at least {MINLENGTH} characters"],
    //     },
    //     skill1: {
    //         type: String,
    //     },
    
    //     skill2: {
    //         type: String,
    //     },
    
    //     skill3: {
    //         type: String,
    //     },
    // },{timestamps:true});