import { Routes, Route} from 'react-router-dom';
import Register from "../src/components/pages/Register"
import Login from "../src/components/pages/Login"
import "./App.css"


function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />  
      <Route path="/login" element={<Login />} />        
      <Route path="/" element={<Login />} />          
    </Routes>
  )
}
export default App
