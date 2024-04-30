const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxlength: 15,
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (value) => /^[a-z-]+$/.test(value),
        message: "Username must contain only lowercase letters and dashes",
      },
    },

    email: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
      unique: true,
      lowercase: true,
      match: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: true,
      maxlength: 72,
      validate: {
        validator: (value) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(value),
        message:
          "Password must include an uppercase letter, a number, and a special character.",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
