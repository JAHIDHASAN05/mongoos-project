import express from 'express'
import { StudentsControllers } from './student.controller'

const router = express.Router()

router.post('/create-student',StudentsControllers.createStudent)


export const StudentRoutes= router