import { Routes, Route } from "react-router-dom";

import { Login, Welcome, SignUp } from "../components";

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/welcome' element={<Welcome />} />
    </Routes>
  )
}

export default Routers