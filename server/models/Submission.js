import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Submission = new Schema(
  {
    link: { type: String, required: true },
    grade: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'F'] },
    student: { type: ObjectId, ref: 'Student', required: true },
    assignment: { type: ObjectId, ref: 'Assignment', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Submission;
