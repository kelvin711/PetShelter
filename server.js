const express = require("express"),
    dbName = "pet-shelter", //passing database name to server, mongoose file will export itself as a function
    app = express(),
    port = 8000,
    cors = require("cors"),
    server = app.listen(port, () => console.log(`all systems firing on port ${port}`));

// WITHOUT THIS req.body will be undefined (the body / data of a form submission)    
app.use(express.json());//parse json data
app.use(cors());//will allow the backend to send and recieve information
app.use(express.urlencoded({extended:true}));//parse string data

require("./server/config/mongoose.config")(dbName);//getting from the config file, receiving the function from mongoose.js
require("./server/routes/pet.routes")(app);//injecting the app
//injecting the route into the server

// requiring a file will execute the code in that file, and if the file
// the function is imported and then immediately executed