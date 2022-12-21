import { Request, Response } from 'express'
import { prismaClient } from '../database/connection'

/**
 * Class with methods for projects
 *
 * @export
 * @class ProjectController
 */
export default class ProjectController {

  /**
   * List all projects
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<void>}
   * @memberof ProjectController
   */
  public async listProjects (req: Request, res: Response): Promise<void> {
    try {
      const data = await prismaClient.campaign.findMany()
      res.status(200).send({ message: 'success', data })
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error: error })
    }
  }

  /**
   *Create a new project
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<void>}
   * @memberof ProjectController
   */
  public async createProject (req: Request, res: Response): Promise<void> {
    try {
      const project = { ...req.body }
      console.log('project', project)
      const newProject = await prismaClient.campaign.create({
        data: {
          ...project
        }
      })
      console.log('newProject', newProject)
      res.status(200).send({ message: 'Success', newProject })
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error: error })
    }
  }
}