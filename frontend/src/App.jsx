import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Walt from "./pages/Walt"
import Login from "./pages/Login"
import Download from "./pages/Download"
import NewRegister from "./pages/NewRegister"

export default function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/walt" element = {<Walt/>}/>
    <Route path="/download" element={<Download/>}/>
    <Route path="/register" element={<NewRegister/>}/>
  </Routes>
  </>
  )
}