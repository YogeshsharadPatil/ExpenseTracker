const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const connectDb = require("./config/connectDb");
const router = require("./routes/userRoute");

//databse call
connectDb();


const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// router.get("/check",(req,res)=>{
//   res.send("Responece from server");
// })

//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
//transaction routes
app.use("/api/v1/transection",require('./routes/transactionRoutes'))
//port
const PORT = 8080;

//listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
