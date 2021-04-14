import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const CohortStudent = new Schema(
  {
    student: { type: ObjectId, ref: 'Student', required: true },
    cohort: { type: ObjectId, ref: 'Cohort', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default CohortStudent;
