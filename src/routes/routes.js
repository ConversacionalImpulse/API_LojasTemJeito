import express from 'express'
const routes = express.Router()

import {home} from '..src/controllers/controller_api.js'
import { createData } from '..src/controllers/controller_pipefy.js';

routes.get('/', home)
routes.post('/formulario', createData)

export default routes;