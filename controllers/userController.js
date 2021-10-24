const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const userController = {
    register: async (req, res) => {
    const { email, password, username} = req.body;

  try {
    const user = await User.findOne({ email });

    user &&  res.status(400).json({ message: "This user already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({ email, password: hashedPassword, username});
    
    const token = jwt.sign( { email: newUser.email, id: newUser._id }, "access", { expiresIn: "1h" } );

    res.status(201).json({ result: newUser, token});
  } catch (error) {
    res.status(500).json({ message: "oops! something went wrong." });
    console.log(error);
  }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
         
        try {
          const user = await User.findOne({ email });
      
          if (!user) return res.status(404).json({ message: "This user doesn't exist" });
         
      
          const validatePassword = await bcrypt.compare(password, user.password);
         
          if (!validatePassword) return res.status(400).json({ message: "Invalid login details" });
          
          const token = jwt.sign({ email: user.email, id: user._id }, "access", { expiresIn: "1h" });

          res.status(200).json({ result: user, token });
        } catch (err) {
          res.status(500).json({ message: "Something went wrong" });
        }
    }
}

module.exports = userController;