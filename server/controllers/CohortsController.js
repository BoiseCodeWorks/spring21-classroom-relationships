import { assignmentsService } from "../services/AssignmentsService";
import { cohortsService } from "../services/CohortsService";
import { cohortStudentsService } from "../services/CohortStudentsService";
import BaseController from "../utils/BaseController";

export class CohortsController extends BaseController {
  constructor() {
    super("api/cohorts");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/assignments", this.getAssignmentsByCohortId)
      .get("/:id/students", this.getStudentsByCohortId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }



  /**
   * Sends found cohorts to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const cohorts = await cohortsService.find(req.query)
      return res.send(cohorts);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found cohort to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const cohorts = await cohortsService.findOne({ _id: req.params.id })
      return res.send(cohorts);
    } catch (error) {
      next(error);
    }
  }
  /**
   * Sends found assignments to a client by request provided the Id from params for the cohort
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAssignmentsByCohortId(req, res, next) {
    try {
      const assignments = await assignmentsService.find({ cohort: req.params.id })
      return res.send(assignments)
    } catch (error) {
      next(error)
    }
  }

  /**
 * Sends found assignments to a client by request provided the Id from params for the cohort
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
  async getStudentsByCohortId(req, res, next) {
    try {
      const assignments = await cohortStudentsService.findStudents({ cohort: req.params.id })
      return res.send(assignments)
    } catch (error) {
      next(error)
    }
  }


  /**
   * Creates a cohort from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const cohort = await cohortsService.create(req.body)
      res.send(cohort);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await cohortsService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await cohortsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}