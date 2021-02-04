// Trigger the code in .model to be executed and export the model constructor
const Pet = require("../models/pet.model");

//*TEXT* change variable to w/e makes sense for the project


    // export an object with a bunch of methods in it
module.exports = {
    // key: value pair pattern, long-form for methods
    // create :(req,res) => { arrow function method
    create: function (req, res) {
    console.log("create method executed");

    Pet.create(req.body)
        .then((pet) => {
        // city is the city from the DB now, which has a DB _id, createdAt, etc.
        // send it back in the response to the client
        res.json(pet);
        })
        .catch((err) => {
        res.status(400).json(err);
        });
    },

    // shorthand method key value pair
    getAll(req, res) {
    console.log("getAll method executed");

    // .find always returns an array
    Pet.find()
        .then((pets) => {
        res.json(pets);
        })
        .catch((err) => {
        res.status(400).json(err);
        });
    },

    getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    Pet.findById(req.params.id)
        .then((pet) => {
        res.json(pet);
        })
        .catch((err) => {
        res.status(400).json(err);
        });
    },
    
    update(req, res) {
        console.log("update method executed", "url params:", req.params);
        
        // req.body is the new updated info from the submitted form
        Pet.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            // return the updated object rather than the old info
            new: true,
        })
        .then((pet) => {
            res.json(pet);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    },

    delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    Pet.findByIdAndDelete(req.params.id)
        .then((pet) => {
        res.json(pet);
        })
        .catch((err) => {
        res.status(400).json(err);
        });
    },
};
