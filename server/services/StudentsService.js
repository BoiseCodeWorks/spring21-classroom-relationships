import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StudentsService {
  async find(query = {}) {
    return await dbContext.Students.find(query)
  }

  async findOne(id) {
    let data = await dbContext.Students.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Students.create(body)
  }
  async edit(body) {
    let data = await dbContext.Students.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.Students.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const studentsService = new StudentsService();