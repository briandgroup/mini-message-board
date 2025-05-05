const express = require('express')


const path = require('path')

const app = express()

const assetsPath = path.join(__dirname,"public")

const messageController = require("./controllers/messageController")

app.set('view engine','ejs')


//app level middleware that intercepts every request 

app.use(express.urlencoded({ extended: true }));

app.use(express.static(assetsPath))

app.get('/new', (req,res)=>{
    res.render('form')
})

app.get('/:user/message', messageController.getMessagesFromUser)

app.post('/new',(req,res)=>{
    const formData = req.body 
    console.log(formData)

    messages.push({text:formData.messageText, user:formData.messageUser})

    res.redirect("/")
})


app.use('/', messageController.getMessages)


app.listen(3000,(req,res)=>{
    console.log(`App is listening at http://localhost:3000`)
})