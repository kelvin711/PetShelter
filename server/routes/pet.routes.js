const PetController = require("../controllers/pet.controllers");

// LEADING SLASHES IN URLS REQUIRED

// export a function to be called and passed the app
module.exports = (app) => {
  // in DJango: path("api/cities", views.allCities)
    app.get("/api/pets", PetController.getAll);
  // :id is a url paramter that will be added to req.params.id
    app.get("/api/pet/:id", PetController.getOne);
    app.post("/api/pet/create", PetController.create);
    app.delete("/api/pet/delete/:id", PetController.delete);
    app.put("/api/pet/:id", PetController.update);
};

