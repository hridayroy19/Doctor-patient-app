import express from 'express'
import { AdminController } from './admin.controller'
import auth from '../../middlewares/auth'

const adminrouter = express.Router()

adminrouter.get('/dashboard', auth('admin'), AdminController.getDashboardStats)

export const AdminRoutes = adminrouter
