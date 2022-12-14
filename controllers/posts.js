const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");


module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id, status: "active" });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({status: "active"}).sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", {posts: posts, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  getSuccessStories: async (req, res) => {
    try {
      const posts = await Post.find({status: "inactive"}).sort({ createdAt: "desc" }).lean();
      res.render("success-stories.ejs", {posts: posts, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comment = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean()
      res.render("post.ejs", { post: post, user: req.user, comments: comment });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        name: req.body.name,
        dateLost: req.body.dateLost,
        species: req.body.species,
        breed: req.body.breed,
        secondBreed: req.body.secondBreed,
        primaryColor: req.body.primaryColor,
        secondaryColor: req.body.secondaryColor,
        gender: req.body.gender,
        sterilized: req.body.sterilized,
        microchip: req.body.microchip,
        microchipNumber: req.body.microchipNumber,
        wearingCollar: req.body.wearingCollar,
        collarColor: req.body.collarColor,
        status: "active",
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        address: req.body.address,
        city: req.body.city,
        county: req.body.county,
        zipCode: req.body.zipCode,
        landmark: req.body.landmark,
        state: req.body.state,
        // likes: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  successPost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $set: { status: "inactive" },
        }
      );
      res.redirect(`/profile`);
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
