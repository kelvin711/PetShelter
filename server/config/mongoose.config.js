const mongoose = require("mongoose");

//passing dbName as a function from server.js
module.exports = (dbName) => {
    mongoose
    .connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log(`Successfully connected ${dbName} DB`);
    })
    .catch((err) => {
        console.error(err);
    });
};