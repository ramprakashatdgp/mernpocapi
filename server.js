//import
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const colors = require("colors");
const connectDb = require("./config/db");
const path=require("path")
//mongodb func call
connectDb();

//rest obj
const app = express();

//view =>  template engine
app.set("view engine", "pug");
app.set("views", "./views");

//middelwares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));

//viewRoutes
app.get("/", (req, res) => {
  res.render("firstFile");
});

//port number
const PORT = 5000;
app.use(express.static("./client/build"));
app.get('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,"client","build","index.html"))

})
//listener
app.listen(PORT, () => {
  console.log(`Server Running on Port = ${PORT}`.bgCyan);
});
