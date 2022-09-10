import { Router } from 'express'
import UserController from '../controllers/UserController'
const router = Router()
const userController = new UserController()

router.get('/users', userController.testRoute)
router.post('/users/register', userController.userRegister)

export default router
