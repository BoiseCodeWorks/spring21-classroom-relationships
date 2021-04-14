import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class SubmissionsService {
  async find(query = {}) {
    return await dbContext.Submissions.find(query)
      .populate('student', 'name')
      .populate('assignment')
  }

  async findOne(id) {
    let data = await dbContext.Submissions.findOne({ _id: id }).populate('student')
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Submissions.create(body)
  }
  async edit(body) {
    let data = await dbContext.Submissions.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.Submissions.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const submissionsService = new SubmissionsService();