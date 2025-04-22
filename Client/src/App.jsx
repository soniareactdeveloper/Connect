import { Route, Routes } from 'react-router'
import './App.css'

function App() {


  return (
    <>
     <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
    </Routes>

    </>
  )
}

export default App
