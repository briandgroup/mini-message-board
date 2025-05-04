const express = require('express')


const path = require('path')

const app = express()

const assetsPath = path.join(__dirname,"public")

app.set('view engine','ejs')

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

//app level middleware that intercepts every request 

app.use(express.urlencoded({ extended: true }));

app.use(express.static(assetsPath))

app.get('/new', (req,res)=>{
    res.render('form')
})

app.get('/:user/message', (req,res)=>{
    const params = req.params

    console.log(params)

    const {user, text} = messages.find(user=>user.user===params.user)

    res.render('message',{user: user, text:text
})})

app.post('/new',(req,res)=>{
    const formData = req.body 
    console.log(formData)

    messages.push({text:formData.messageText, user:formData.messageUser})

    res.redirect("/")
})


app.use('/', (req,res)=>{

    res.render('index',{
        title:"Mini Message Board",
        messages:messages
    })
})


app.listen(3000,(req,res)=>{
    console.log(`App is listening at http://localhost:3000`)
})