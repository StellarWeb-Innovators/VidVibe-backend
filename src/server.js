require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 5000;


async function main() {
    try {

        // connect database
        await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
        console.log("Connected to the database successfully!");


        app.listen(port, () => {
            console.log(`server is running on ${port}`);
        });

    } catch (error) {
        console.log("Error :", error);
    }
}
main();



