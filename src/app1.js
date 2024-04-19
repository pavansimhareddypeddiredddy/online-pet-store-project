const express = require("express");
const app=express();
const hbs=require('hbs');
const path= require("path");
const collection=require('./connect');

const viewPath=path.join(__dirname,'../view')

app.use(express.json())
app.set("view engine","hbs")
app.set("views",viewPath)
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  res.render("signup");
})

app.get("/login",(req,res)=>{
  res.render("login");
})

app.post("/signup",async(req,res)=>{
  const data=await collection(req.body);
  data.save();
  res.render("login");
})

app.post("/login",async(req,res)=>{
  try{
    const check = await collection.findOne({name:req.body.name})

    if(check.password===req.body.password){
      res.render("index")
    }
    else{
      res.send("Incorrect password");
    }
  }
  catch{
    res.send("Incorrect details")
  }
})









// app.get("/",(req,res)=>{
//   res.sendFile(__dirname+'../view/signup.html');
// })
// app.post('/signup',encoded,async(req,res)=>{
//   let student = await student1(req.body);
//   student.save()
//     .then(()=>{
//       res.send(`
//         <h2>User registered successfully!</h2>
//         <p>Click <a href="/public/login">here</a> to login or 
//         click <a href="/">here</a> for register another user.</p>
//       `);
//     })
//     .catch(err => console.log(err))
// })
// app.get('/login',(req,res)=>{
//   res.sendFile(__dirname+'/public/login.html')
// })
// app.post('/loggedin',encoded,async(req,res)=>{
//   const username1 = req.body.username;
//   const password1 = req.body.password;
//   student1.findOne({fname:username1,password:password1})
//   .then(student=>{
//     if(student){
//       res.redirect('/dashboard')
//     } else{
//       res.status(401).send('Invalid username or password');
//     }
//   })
//   .catch(error=>{
//     console.error(error);
//     res.status(500).send('Internal Server Error');
//   });
// })
// app.get('/dashboard',(req,res)=>{
//   res.send("Welcome User")
// })
app.listen(8000, ()=>{
  console.log("Server is running on port 8000")
})