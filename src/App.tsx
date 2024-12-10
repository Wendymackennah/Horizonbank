import { Routes, Route} from 'react-router-dom';
import Register from "./components/pages/pages/Register"
import Login from "./components/pages/pages/Login"
import Register2 from "./components/pages/pages/Register2"

import "./App.css"
import EmailVerification from './components/pages/pages/EmailVerification';


function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />  
      <Route path="/login" element={<Login />} />        
      <Route path="/" element={<Register2 />} />   
      <Route path="/emailverification" element={<EmailVerification />} />   
 
    </Routes>
  )
}
export default App
