import mongoose from "mongoose";

const DB_URL =
  "mongodb+srv://test:test@cluster0.k9k88.mongodb.net/database?retryWrites=true&w=majority";

export default mongoose.connect(DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
