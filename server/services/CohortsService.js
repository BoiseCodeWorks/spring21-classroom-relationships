import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CohortsService {
  async find(query = {}) {
    return await dbContext.Cohorts.find(query)
  }

  async findOne(id) {
    let data = await dbContext.Cohorts.findOne({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async create(body) {
    return await dbContext.Cohorts.create(body)
  }
  async edit(body) {
    let data = await dbContext.Cohorts.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.Cohorts.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const cohortsService = new CohortsService();