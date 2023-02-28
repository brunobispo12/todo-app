const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "todo",
})

app.use(cors())
app.use(express.json())

app.post("/addtask", (req, res) =>{
   const task = req.body.task

    let SQL = "INSERT INTO todolist ( task ) VALUES ( ? )"

    db.query(SQL, [task] , (er, result) => {
        console.log(er)
    })
})

app.get("/getTasks", (req, res)=>{
    let SQL = "SELECT * FROM todolist"
    db.query(SQL, (err, result) =>{
        if (err) console.log(err)
        else res.send(result)
    })
})

app.delete("/delete/:id", (req , res) => {
    let id = req.params.id
    let SQL = "DELETE FROM todolist WHERE idtask = ? "
    db.query(SQL, [id] , (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})


app.listen(3001, () => {
    console.log('Rodando o servidor')
})