import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cohort = new Schema(
  {
    title: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Cohort;
