import React, { useContext } from 'react'
import Login from './pages/Login'
import { AdminContext } from './context/AdminContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashbord from './pages/Admin/Dashbord';
import AllApointment from './pages/Admin/AllApointment';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';
const App = () => {
  const {atoken} = useContext(AdminContext)
  const {dtoken} = useContext(DoctorContext)
  return atoken || dtoken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          {/* Admin route */}
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashbord />} />
          <Route path='/all-apointments' element={<AllApointment />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctors-list' element={<DoctorsList />} />
          {/* doctor route */}
          <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
          <Route path='/doctor-appointments' element={<DoctorAppointments />} />
          <Route path='/doctor-profile' element={<DoctorProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
    <Login/>
    <ToastContainer/>
    </>
  )
}

export default App
