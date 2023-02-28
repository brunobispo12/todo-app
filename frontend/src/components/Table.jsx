import React from "react";
import Task from "../components/Task";


function Table(props) {

    let listTasks = props.listTasks

    return (
        <table className="Tasks">
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Ação</th>
            </tr>
        </thead>
        <tbody>
            {typeof listTasks !== "undefined" && listTasks.map((value) => {
                return (
                    <Task
                        key = {value.idtask}
                        id = {value.idtask}
                        task={value.task}
                        handleDelete={props.handleDelete}
                    ></Task>
                )
            }
            )
            }
        </tbody>
    </table>
    );
}

export default Table;
