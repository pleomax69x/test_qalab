import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
  id: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
});

export default mongoose.model("User", User);
