import express from "express";
import { LoginModel } from "../data_schema/Login_schema.js";

const loginroutes = express.Router();

loginroutes.get("/", async (req, res) => {
  try {
    const login = await LoginModel.find({});
    if (!(login.length > 0)) {
       return res.status(200).send("No User found")
    }
    res.status(200).json(login);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

loginroutes.post("/", async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newlogin = {
      username: req.body.username,
      password: req.body.password,
    };
    const login = await LoginModel.create(newlogin);

    return res.status(201).json(login);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default loginroutes;
