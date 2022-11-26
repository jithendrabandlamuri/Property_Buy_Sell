require("dotenv").config();
const cors = require("cors");
const express = require("express");
const user = require("./config");
const app = express();
app.use(express.json());
app.use(cors())

app.post("/create",async (req,res)=>{
  const data=req.body;
  console.log(data);
  await user.add(data)
  res.send({msg:"user added"});
})
