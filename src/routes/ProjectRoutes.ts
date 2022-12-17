import { Router } from "express";
import ProjectController from '../controllers/ProjectController'
const projectController = new ProjectController()

const router = Router()

router.get('/projects/list', projectController.listProjects)

export default router