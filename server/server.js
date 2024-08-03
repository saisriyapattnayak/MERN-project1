const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userData=require("./model")

let app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/ReactCrud")
.then(()=>{console.log("connect")})
.catch(()=>{console.log("did not connect")})

app.post("/submit",(req,res)=>{
    userData.findOne({email:req.body.email})
    .then((data)=>{
        if(data){
            res.send({"message":"email id is already taken"})
        }
        else{
            let data=new userData(req.body)
            data.save()
            .then(()=>{
                res.send({"message":"Registeration successful"})
            })
            .catch(()=>{console.log("data not saved")})
        }
    })
    
    
})

app.post("/login",(req,res)=>{
    console.log(req.body)
    let {email,password}=req.body
    userData.findOne({email:email,password:password})
    .then((data)=>{
        if(data){
            console.log(data)
            res.send(data)
        }
        else{
            res.send({"message":"email id or password not match"})
        }
    })
    .catch(()=>{
        console.log("error")
    })
})

app.get("/users",(req,res)=>{
    userData.find()
    .then((data)=>{
        res.send(data)
    })
    .catch(()=>{console.log("data not found")})
})

app.get("/edit/:id",(req,res)=>{
    userData.findOne({_id:req.params.id})
    .then((data)=>{
        res.send(data)
    })
    .catch(()=>{console.log("failed")})
})

app.put("/edit/:id",(req,res)=>{
    let {email,date,amount,category,password}=req.body
    userData.updateOne({_id:req.params.id},{$set:{email:email,date:date,amount:amount,category:category,password:password}})
    .then(()=>{console.log("data updated in database")
        res.send()
    })
    .catch(()=>{console.log("data not updated")})
})

app.delete("/delete/:id",(req,res)=>{
    // let {name,email,phoneNo,place,password}=req.body

    userData.deleteMany({_id:req.params.id})
    .then(()=>{console.log("data delete in database")
        res.send()
    })
    .catch(()=>{console.log("data not deleted")
       
    })
})


// app.delete("/delete/:id", (req, res) => {
//     const id=req.params.id
//     userData.deleteMany({ _id: id })
//         .then(() => {
//             console.log("data deleted from database");
//             res.status(200).send("Data deleted successfully");
//         })
//         .catch((err) => {
//             console.log("data not deleted", err);
//             res.status(500).send("Error deleting data");
//         });
// });



app.listen(4000,()=>{
    console.log("server is running")
})