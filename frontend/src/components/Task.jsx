import React from "react";

function Task(props) {
    return (
        <tr>
            <td>{props.task}</td>
            <td><button onClick={() => props.handleDelete(props.id)}>Excluir</button></td>
        </tr>
    );
}

export default Task;
