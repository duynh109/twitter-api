import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import User from '~/models/schemas/User.schema'
import databseService from '~/services/database.services'
import userService from '~/services/users.services'
import { RegisterReqBody } from '~/models/requests/User.requests'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'admin@gmail.com' && password === '123456') {
    return res.json({
      message: 'Login successful'
    })
  }
  return res.status(400).json({
    error: 'login failed'
  })
}

export const registerController = async (req: Request<ParamsDictionary, any, RegisterReqBody>, res: Response) => {
  try {
    const result = await userService.register(req.body)
    return res.json({
      message: 'register successful',
      result
    })
  } catch (error) {
    return res.status(400).json({
      message: 'register failed',
      error: error
    })
  }
}
