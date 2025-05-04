const pool = require('./pool')

async function getAllMessages(){

    const {rows} = await pool.query("SELECT * FROM messages")

    return rows

}


async function getUserMessages(user){
    const {rows} = await pool.query("SELECT * FROM messages WHERE user = ($1)",[user])

    return rows
}

module.exports = {
    getAllMessages,
    getUserMessages
}