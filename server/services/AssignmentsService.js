import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class AssignmentsService {

  async find(query = {}) {
    return await dbContext.Assignments.find(query)
  }

  async findOne(id) {
    let data = await dbContext.Assignments.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }

  async create(body) {
    return await dbContext.Assignments.create(body)
  }
  async edit(body) {
    let data = await dbContext.Assignments.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.Assignments.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const assignmentsService = new AssignmentsService();