import { studentsService } from "../services/StudentsService";
import BaseController from "../utils/BaseController";

export class StudentsController extends BaseController {
  constructor() {
    super("api/students");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }


  /**
   * Sends found students to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const students = await studentsService.find(req.query)
      return res.send(students);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found student to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const students = await studentsService.findOne({ _id: req.params.id })
      return res.send(students);
    } catch (error) {
      next(error);
    }
  }


  /**
   * Creates a student from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const student = await studentsService.create(req.body)
      res.send(student);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await studentsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await studentsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}