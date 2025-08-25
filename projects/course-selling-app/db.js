const mongoose = require("mongoose");
require("dotenv").config();

const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected");
  } catch (e) {
    console.log("Error while connecting to the Database");
    process.exit(1);
  }
};

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchasesSchema = new Schema(
  {
    courseId: { type: ObjectId, ref: "course", required: true },
    userId: { type: ObjectId, ref: "user", required: true },
  },
  { timestamps: true }
);

const courseContentSchema = new Schema({
  courseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchasesSchema);

module.exports = {
  connectDb: connectDb,
  userModel: userModel,
  adminModel: adminModel,
  courseModel: courseModel,
  purchaseModel: purchaseModel,
};
