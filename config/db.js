const mongoose = require("mongoose");
const colors = require("colors");

//function connect mongodb database

const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://mockapidb:9Goqje7rLxQRkdMMl1AakrVfgLy9nUz7HBk5sCnKqDjCEI5g8MjOuZnZl9lzVYbkA2WZGx7Qr9Y9ACDbBJWaVw==@mockapidb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@mockapidb@");
    console.log(`Connected to mongodb ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Mongodb Errro ${error.message}`.bgRed);
    process.exit(1);
  }
};

module.exports = connectDb;
