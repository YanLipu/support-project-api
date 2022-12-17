import { Router } from 'express'
import user from './UserRoutes'
import project from './ProjectRoutes'


const router = Router()

router.use(user)
router.use(project)

export default router
