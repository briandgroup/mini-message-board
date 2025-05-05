const pool = require('./pool')

async function getAllMessages(){

    const {rows} = await pool.query("SELECT * FROM messages")

    return rows

}


async function getUserMessages(user){
    const {rows} = await pool.query("SELECT * FROM messages WHERE username = ($1)",[user])

    console.log('after queries object is', rows)

    return rows
}

module.exports = {
    getAllMessages,
    getUserMessages
}