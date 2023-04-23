const User = require("../models/User.js")
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");


  // register
  router.post("/register", async (req, res) => {
    try {
     const {username, email, password} = req.body;
     // password veri tabanında görüntülenmesin diye bcryp.js paketini kullanıp hashledik
     const salt = await bcrypt.genSalt(10);
     const hashPassword = await bcrypt.hash(password, salt);
     const newUser = new User({username,email,password:hashPassword})
     await newUser.save()
      res.status(200).json("Kullanıcı Oluşturuldu");
    } catch (error) {
      res.status(500).json(error);
    }
  });

  // login
  router.post("/login", async (req, res) => {
    try {
      const {email, password} = req.body
      const user = await User.findOne({email})
  
      if (!user) {
        res.status(404).send({ error: "User not found!" });
        return
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(403).json("Invalid password");
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json(error)
    }
  });

  module.exports = router;
