import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditUser=()=>{
    let [email,setEmail]=useState("")
    let [date,setDate]=useState("")
    let [amount,setAmount]=useState("")
    let [category,setCate]=useState("")
    let [password,setPassword]=useState("")
    let id=useParams()
    console.log(id.id)
    let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:4000/edit/${id.id}`)
        .then((res)=>{
            
            setEmail(res.data.email)
            setDate(res.data.date)
            setAmount(res.data.amount)
            setCate(res.data.category)
            setPassword(res.data.password)
        })
        .catch(()=>{console.log("failed")})
    },[id.id])
    let submitData=()=>{
        let payload={
            email:email,
            date:date,
            amount:amount,
            category:category,
            password:password
        }
        axios.put(`http://localhost:4000/edit/${id.id}`,payload)
        .then(()=>{console.log("data updated")
            navigate("/users")
        })
        .catch(()=>{console.log("data did not updated")})
    }    
    return(
        <div style={{width:"100vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h1>EDIT FORM</h1>
            <table style={{width:"45%",height:"50%",border:"2px solid black",boxShadow:"0 0 10px black"}}>
            <tr>
                    <td>Email</td>
                    <td>: <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>: <input type="text" placeholder="Date" onChange={(e)=>{setDate(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Amount</td>
                    <td>: <input type="number" placeholder="Amount" onChange={(e)=>{setAmount(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>: <input type="text" placeholder="Category" onChange={(e)=>{setCate(e.target.value)}}/></td>
                </tr>
                
                <tr>
                    <td>Password</td>
                    <td>: <input type="text" onChange={(e)=>{setPassword(e.target.value)}}/></td>
                </tr>
                <tr>
                    <td colSpan={2} align="center"><button onClick={submitData}>Update</button></td>
                </tr>
            </table>
        </div>
    )
}
export default EditUser