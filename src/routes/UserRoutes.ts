import { Router } from 'express'
import UserController from '../controllers/UserController'
import Authentication from '../middlewares/auth'
const router = Router()
const userController = new UserController()
const authentication = new Authentication()

router.get('/users', authentication.checkIfUserIsLogged , userController.testRoute)
router.post('/users/register', userController.userRegister)
router.post('/users/login', userController.login)

export default router
