import Createuser from "./component/Createuser"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./component/Login"
import Users from "./component/Users"
import EditUser from "./component/EditUser"

const App=()=>{
    return(
        <div>
            
           <BrowserRouter>  
                <Routes>
                    <Route element={<Createuser/>} path="/"/>
                    <Route element={<Login/>} path="/login"/>
                    <Route element={<Users/>} path="/users"/>
                    <Route element={<EditUser/>} path="/edit/:id"/>
                </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App