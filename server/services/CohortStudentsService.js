import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CohortStudentsService {
  async findStudents(query) {
    let data = await dbContext.CohortStudents.find(query).populate('student')
    // @ts-ignore
    return data.map(d => d.student)
  }
  async findCohorts(query) {
    let data = await dbContext.CohortStudents.find(query).populate('cohort')
    return data
  }
  async create(body) {
    return await dbContext.CohortStudents.create(body)
  }
  async edit(body) {
    let data = await dbContext.CohortStudents.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.CohortStudents.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const cohortStudentsService = new CohortStudentsService();