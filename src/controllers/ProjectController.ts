import { Request, Response } from 'express'
export default class ProjectController {
  public async listProjects (req: Request, res: Response): Promise<void> {
    try {
      res.status(200).send({ message: 'success' })
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error: error })
    }
  }
}