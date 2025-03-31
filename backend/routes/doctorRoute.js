

import express from 'express'
import { appointmentCancel, appointmentComplete, appointmentDoctor, doctorDashboard, doctorList, doctorProfile, loginDoctor, updateDoctorprofile } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor, appointmentDoctor)
doctorRouter.post('/complete-appointment',authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor, appointmentCancel)
doctorRouter.get('/doctor-dashboard',authDoctor, doctorDashboard)
doctorRouter.get('/doctor-profile',authDoctor, doctorProfile)
doctorRouter.post('/doctor-prfile-edit',authDoctor, updateDoctorprofile)

export default doctorRouter