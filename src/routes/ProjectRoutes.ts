import { Router } from 'express'
import ProjectController from '../controllers/ProjectController'
import Authentication from '../middlewares/auth'
const projectController = new ProjectController()
const authentication = new Authentication()


const router = Router()

router.get('/projects/list', projectController.listProjects)
router.post('/projects/new', authentication.checkIfUserIsLogged, projectController.createProject)

export default router