import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"

const changeAvailablity = async (req, res)=>{
    try {
        
        const {docId} = req.body
        const docdata = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{avilable: !docdata.avilable})
        res.json({success: true, message:"available change"})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}
const doctorList = async(req, res)=>{
    try {
        const doctors = await doctorModel.find({}).select(['-password','-email'])

        res.json({success:true, doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

// api for doctor login 

const loginDoctor = async(req,res)=>{
    try {
        const { email,password } = req.body
        const doctor = await doctorModel.findOne({email})

        if(!doctor){
            return res.json({success:false, message:"Invalid credantials"})

        }
        const isMatch = await bcrypt.compare(password, doctor.password)

        if(isMatch){
            const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET)

            res.json({success:true,token})
        } else{
            res.json({success:false, message:"Invalid credantials"})

        }
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

// api to get doctor appointments

const appointmentDoctor = async(req,res)=>{
    try {
        const { docId } = req.body
        const appointments = await appointmentModel.find({docId})

        res.json({success:true, appointments})
    } catch (error){
        console.log(error)
        res.json({success:false , message: error.message})
    }
}
// api to mark completed 

const appointmentComplete = async(req, res)=>{
    try {
        const {docId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        
        if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted: true})
            return res.json({success:true, message:'Appointment completed'})
        } else{
            return res.json({success:false, message:'Mark Failed'})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

// api to mark canceled 

const appointmentCancel = async(req, res)=>{
    try {
        const {docId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)
        
        if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true })
            return res.json({success:true, message:'Appointment canceled'})
        } else{
            return res.json({success:false, message:'Cancel Failed'})
        }

    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

// api to get doctor dashboard panel

const doctorDashboard = async(req,res)=>{
    try {
        const {docId} = req.body

        const appointments = await appointmentModel.find({docId})

        let earning = 0

        appointments.map((item)=>{
            if(item.isCompleted || item.payment){
                earning+=item.amount
            }
        })
        let pataitent = []
        appointments.map((item)=>{
            if(pataitent.includes(item.userId)){
                pataitent.push(item.userId)
            }
        })
        const dashData ={
            earning,
            appointments: appointments.length,
            patients: pataitent.length+1,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success: true, dashData})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

// api to get doctor profile

const doctorProfile = async(req,res)=>{
    try {
        const {docId} = req.body
        const profileData = await doctorModel.findById(docId).select('-password')

        res.json({success:true, profileData})

    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

// api to update doctorprofile data 

const updateDoctorprofile = async(req,res)=>{
    try {
        const {docId,fees,address,avilable} = req.body

        await doctorModel.findByIdAndUpdate(docId, {fees,address,avilable})
        res.json({success:true, message:"Profile updated"})

    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

export {changeAvailablity, doctorList,loginDoctor,appointmentDoctor, appointmentCancel, appointmentComplete, doctorDashboard, doctorProfile,updateDoctorprofile }