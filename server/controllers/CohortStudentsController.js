import { cohortStudentsService } from "../services/CohortStudentsService";
import BaseController from "../utils/BaseController";

export class CohortStudentsController extends BaseController {
  constructor() {
    super("api/CohortStudents");
    this.router
      .post("", this.create)
      .delete("/:id", this.delete)
  }

  /**
   * Creates a cohortStudent from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const cohortStudent = await cohortStudentsService.create(req.body)
      res.send(cohortStudent);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await cohortStudentsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}