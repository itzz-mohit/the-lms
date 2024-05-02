const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");

//REGISTER
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check for username
    const findUsername = await userModel.findOne({ username });
    if (findUsername) {
      return res
        .status(400)
        .json({ error: "Username already exists.", errorCode: "username" });
    }

    //check for email
    const findEmail = await userModel.findOne({ email });
    if (findEmail) {
      return res
        .status(400)
        .json({ error: "Email already exists.", errorCode: "email" });
    }

    //password encryption
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //creating user
    const response = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    console.log("User registered successfully");
    res
      .status(201)
      .json({
        message: "Registration successful",
        success: true,
        user: response,
      });
  } catch (error) {
    console.log("Error occurred while registering user");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // finding valid user
    const response = await userModel.findOne({ email });
    if (!response) {
      return res
        .status(404)
        .json({ error: "User does not exist.", errorCode: "email" });
    }

    // checking password
    const passwordIsValid = await bcrypt.compare(password, response.password);
    if (!passwordIsValid) {
      return res
        .status(401)
        .json({ error: "Invalid password.", errorCode: "password" });
    }

    res.status(200).json({
      message: "Login successful",
      success: true,
      user: response,
    });
  } catch (error) {
    console.clg("Error occurred while logging in user");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
