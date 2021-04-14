import mongoose from "mongoose";
import AssignmentSchema from "../models/Assignment";
import CohortSchema from "../models/Cohort";
import CohortStudentSchema from "../models/CohortStudent";
import StudentSchema from "../models/Student";
import SubmissionSchema from "../models/Submission";

class DbContext {
  Cohorts = mongoose.model("Cohort", CohortSchema);
  Assignments = mongoose.model("Assignment", AssignmentSchema);
  Students = mongoose.model("Student", StudentSchema);
  Submissions = mongoose.model("Submission", SubmissionSchema);
  CohortStudents = mongoose.model("CohortStudent", CohortStudentSchema);
}

export const dbContext = new DbContext();
