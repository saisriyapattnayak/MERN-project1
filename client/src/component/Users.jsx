import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users=()=>{
    let [data,setData]=useState([])
    let [flag,setFlag]=useState(false)
    let [input,setInput]=useState("")
    let [filterData,setFilterData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/users")
        .then((res)=>{setData(res.data)
            setFlag(false)
            // console.log(res.data)
        })
        .catch(()=>{console.log("data did not get")})
    },[flag])
    console.log(data)
    function deleteData(id){
        console.log(id)
        axios.delete(`http://localhost:4000/delete/${id}`)
        .then(()=>{console.log("data deleted")
            setFlag(true)
        })
        .catch(()=>{console.log("data not deleted")})
    }
    // let handleSearch=(event)=>{
    //     setInput(event.target.value)
    //     setFilterData(data.filter((elem)=>{
    //         return elem.name.toLowerCase().startsWith(input.toLowerCase())
    //     }))
    // }
    return(
        <div style={{width:"100vw",height:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
            {/* <input type="text" value={input} placeholder="search" style={{width:"40%",height:"40px",border:"2px solid black",borderRadius:"20px",padding:"10px"}} onChange={handleSearch}/> */}
            <div style={{width:"100%",height:"100%",display:"flex",flexWrap:"wrap",gap:"20px"}}>
                {data.map((user)=>{
                    return(
                        <table style={{width:"33%",height:"50%",border:"2px solid black",borderRadius:"10px"}}>
                            <tr>
                                <td align="center">Email</td>
                                <td>: {user.email}</td>
                            </tr>
                            <tr>
                                <td align="center">Date</td>
                                <td>: {user.date}</td>
                            </tr>
                            <tr>
                                <td align="center">Amount</td>
                                <td>: {user.amount}</td>
                            </tr>
                            <tr>
                                <td align="center">Category</td>
                                <td>: {user.category}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} align="center">Description: amet consectetur adipisicing elit. Labore cumque perferendis</td>
                            </tr>
                            <tr>
                                <td align="center"><button><Link to={`/edit/${user._id}`}>EDIT</Link></button></td>
                                <td align="center"><button onClick={()=>{deleteData(user._id)}}>DELETE</button></td>
                            </tr>
                        </table>
                    )
                })}
            </div>
        </div>
    )
}
export default Users