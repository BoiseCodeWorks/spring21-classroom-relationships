import { submissionsService } from "../services/SubmissionsService";
import BaseController from "../utils/BaseController";

export class SubmissionsController extends BaseController {
  constructor() {
    super("api/submissions");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }


  /**
   * Sends found submissions to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const submissions = await submissionsService.find(req.query)
      return res.send(submissions);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found submission to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const submissions = await submissionsService.findOne({ _id: req.params.id })
      return res.send(submissions);
    } catch (error) {
      next(error);
    }
  }


  /**
   * Creates a submission from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const submission = await submissionsService.create(req.body)
      res.send(submission);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await submissionsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await submissionsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}