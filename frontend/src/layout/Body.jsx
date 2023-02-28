import React, { useState, useEffect } from "react";
import './Body.css'
import Table from "../components/Table"
import Axios from "axios"

const Body = () => {

    const [task, setTask] = useState('')

    const [listTasks, setListTasks] = useState([])

    useEffect(() =>{
        Axios.get("http://localhost:3001/getTasks").then((response) => setListTasks(response.data))
    }, [])


    function handleSubmit() {
        console.log('Submitting task:', task);
        Axios.post("http://localhost:3001/addtask", {
            task: task
        })
        window.location.reload()
    }

    function handleDelete(id) {
        Axios.delete(`http://localhost:3001/delete/${id}`)
        window.location.reload()
    }

    return (
        <section>
            <div className="todolist">
                <h2>Cadastro das Tarefas</h2>
                <div className="inputTasks">
                    <input type="text" value={task} onChange={(e) => {setTask(e.target.value)}} />
                    <button onClick={handleSubmit}>+</button>
                </div>
                <div>
                    <Table handleDelete = {handleDelete} listTasks = {listTasks}></Table>
                </div>
            </div>
        </section>
    )
}

export default Body;
