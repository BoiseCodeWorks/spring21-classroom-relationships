import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Assignment = new Schema(
  {
    title: { type: String, required: true },
    cohort: { type: ObjectId, ref: 'Cohort', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Assignment;
