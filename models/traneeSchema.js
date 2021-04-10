const mongoose = require("mongoose");

const traineeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
  },
  {
    timesstamp: true,
  }
);
const Trainee = mongoose.model("Trainee", traineeSchema);
module.exports = Trainee;
