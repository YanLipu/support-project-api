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
      res.status(500).send({ message: 'Internal server error' })
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
      const checkParameters = (object: Record<string, unknown>, requiredParams: Array<string>): Array<string> => {
        const errors: Array<string> = []
        requiredParams.forEach(key=>{
          if (!object.hasOwnProperty(key)) {
            errors.push(`${key} is a required property`)
          }
        })
        return errors
   
      }

      const requiredParams: Array<string> = [
        'name',
        'description',
        'goal',
        'amount_raised',
        'monthly_cost',
        'verified',
        'sponsor',
        'type',
        'photos_path',
        'videos_path' 
      ]

      const errors = checkParameters(project, requiredParams)

      if (Array.isArray(errors) && errors.length > 0) {
        const message = errors.join(',')
        res.status(400).send(`${message}`)
        return
      }

      const newProject = await prismaClient.campaign.create({
        data: {
          user_id: 1,
          name: project.name,
          description: project.description,
          goal: project.goal,
          amount_raised: project.amount_raised,
          monthly_cost: project.monthly_cost,
          verified: false,
          sponsors: project.sponsor,
          type: '1',
          photos_path: project.photos_path,
          videos_path: project.videos_path
        }
      })
      res.status(200).send({ message: 'Success', newProject })
    } catch (error) {
      res.status(500).send({ message: 'Internal server error' })
    }
  }
}