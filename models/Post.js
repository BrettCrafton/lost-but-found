const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateLost: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  secondBreed: {
    type: String,
  },
  primaryColor: {
    type: String,
    required: true,
  },
  secondaryColor: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },  
  sterilized: {
    type: String,
    required: true,
  },
  microchip: {
    type: String,
    required: true,
  },
  microchipNumber: {
    type: String,
  },
  wearingCollar: {
    type: String,
  },
  collarColor: {
    type: String,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  // likes: {
  //   type: Number,
  //   required: true,
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
