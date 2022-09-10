import user from './UserRoutes'
import { Router } from 'express'

const router = Router()

router.use(user)

export default router
