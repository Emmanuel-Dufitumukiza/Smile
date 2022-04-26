import { useState } from 'react'
import Register from '../src/views/Register'
import Login from './views/Login'
import ForgotPassword from './views/ForgotPassword'
import VerificationCode from './views/VerificationCode'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/forgotpassword" exact element={<ForgotPassword />} />
      <Route path="/code" exact element={<VerificationCode/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
