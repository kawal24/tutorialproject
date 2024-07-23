// import { Schema } from "yup";
import mongoose, { Schema } from "mongoose";
const person = new Schema({
  firstname: { type: Schema.Types.ObjectId },
});
export default mongoose.models.person || mongoose.model("person", person);
