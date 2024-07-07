import { Router } from 'express'
import { searchController } from '~/controllers/searchs.controller'
import { searchValidator } from '~/middlewares/search.middlewares'
import { accessTokenValidator, verifiedUserValidator } from '~/middlewares/users.middlewares'
const searchRouter = Router()

searchRouter.get('/', accessTokenValidator, verifiedUserValidator, searchValidator, searchController)

export default searchRouter
