import { useState } from "react";

function Task(props) {
    const [isDeleted, setIsDeleted] = useState(false);
    if (isDeleted) {
        return null;
    }

    const handleDelete = () => {
        setIsDeleted(true);
    };

    return (
        <div className='task'>
            <p>{props.task.task}: {props.task.completed ? "COMPLETED" : "NOT COMPLETED"}</p>
            <button onClick= {handleDelete} >Delete</button>
        </div>
    )

}

export default Task

