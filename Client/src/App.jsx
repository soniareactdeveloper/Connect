import { Route, Routes } from 'react-router'
import './App.css'
import AuthLayout from './Layouts/AuthLayout'
import Login from './Pages/login'
import Registration from './Pages/registration'
import ForgetPass from './Pages/forgetPass'
import MainLayouts from './Layouts/MainLayouts'
import Home from './Pages/Home'
import Chat from './Components/chat'
import Group from './Components/group'
import People from './Components/people'

function App() {
  return (
    <>
     <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Registration/>} />
          <Route path='forgot-password' element={<ForgetPass/>}/>
        </Route>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/group" element={<Group />} />
          <Route path="/people" element={<People />} />
        </Route>
    </Routes>
    </>
  )
}

export default App
