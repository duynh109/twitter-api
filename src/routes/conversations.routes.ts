import { Router } from 'express'
import { getConversationsController } from '~/controllers/conversations.controller'
import { accessTokenValidator, verifiedUserValidator } from '~/middlewares/users.middlewares'

const conversationsRouter = Router()

conversationsRouter.get(
  '/receivers/:receiver_id',
  accessTokenValidator,
  verifiedUserValidator,
  getConversationsController
)

export default conversationsRouter
