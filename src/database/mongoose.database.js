const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagerclust.zln8iwz.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerClust`,
            console.log("Connected to MongoDB!")
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToDatabase;
