import { assignmentsService } from "../services/AssignmentsService";
import BaseController from "../utils/BaseController";

export class AssignmentsController extends BaseController {
  constructor() {
    super("api/assignments");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }


  /**
   * Sends found assignments to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const assignments = await assignmentsService.find(req.query)
      return res.send(assignments);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found assignment to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const assignments = await assignmentsService.findOne({ _id: req.params.id })
      return res.send(assignments);
    } catch (error) {
      next(error);
    }
  }


  /**
   * Creates a assignment from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const assignment = await assignmentsService.create(req.body)
      res.send(assignment);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await assignmentsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await assignmentsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}