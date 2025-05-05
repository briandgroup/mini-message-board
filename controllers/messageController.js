const db = require("../db/queries")


async function getMessages(req,res){

    const messages = await db.getAllMessages()

    console.log('messages are', messages)

    res.render('index', {
        messages: messages
    })

}


async function getMessagesFromUser(req,res){
    let user = req.params.user
    console.log('getting message from', user)
    const messages = await db.getUserMessages(user)

    console.log('getting returned message', messages)

    res.render('message',{
        messages:messages,
        user:user
    })
}

module.exports = { getMessages, getMessagesFromUser }