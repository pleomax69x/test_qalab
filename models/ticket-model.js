import mongoose from "mongoose";
const { Schema } = mongoose;

const Ticket = new Schema({
  id: { type: Schema.Types.ObjectId },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  priority: { type: Number, min: 0, max: 2 },
  creaatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Ticket", Ticket);
