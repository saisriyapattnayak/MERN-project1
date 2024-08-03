import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login=()=>{
    let navigate=useNavigate()
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let payload={
        email:email,
        password:password
    }
   function loginData(){
    // console.log(payload)
    axios.post("http://localhost:4000/login",payload)
    .then((res)=>{
        if(res.data.message){
            alert(res.data.message)
        }
        else{
            alert("Login successful")
            navigate("/users")
        }
    })
    .catch(()=>{console.log("data did not send")})


    
   }
    return(
        <div style={{width:"100vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1>LOGIN FORM</h1>
            <table style={{width:"20%",height:"20%",border:"2px solid black",boxShadow:"0 0 10px black"}}>
                
                <tr>
                    <td>Email</td>
                    <td>: <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/></td>
                </tr>
                
                
                <tr>
                    <td>Password</td>
                    <td>: <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td colSpan={2}>Not register please <Link to="/">Register</Link></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center"><button onClick={loginData}>Login</button></td>
                </tr>
            </table>
        </div>
    )
}
export default Login