import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    message: {
      type: String,
      required: true,
      max: 1000,
    },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);
export default Form;
