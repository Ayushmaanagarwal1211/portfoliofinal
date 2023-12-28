const express=require('express')
let app=express()
let cors=require('cors')
app.use(cors())
let nodemailer=require('nodemailer')
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("JSDKD")
})
app.post('/mail',async (req,res)=>{
    const transport=await nodemailer.createTransport({
        service:'gmail',
        port: 587,
        secure:false,
        auth: {
          user: "loviagarwal55@gmail.com",
          pass: "hsqiflquplixfewi",
        },
    })
  
    let mail=await transport.sendMail({
        from: `${req.body.name} <${req.body.email}>`, // sender address
to: "loviagarwal1209@gmail.com", // list of receivers
subject:`  <${req.body.email}>`, // Subject line
text: req.body.message, // plain text body
html: `<b>${req.body.message}</b>`, // html body
    }).then((success)=>{
        console.log("MESSAGE SENT")
        return res.status(200).send("MESSAGE SENT")
    })
    return res.status(200).json("ASAS")

})

app.listen(3001,()=>console.log("Server Started"))