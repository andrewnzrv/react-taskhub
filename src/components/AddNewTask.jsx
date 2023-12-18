import { useState } from "react";
import './styles/AddNewTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function AddNewTask(props) {
    const [task, setTask] = useState('');
    const handleTaskInput = (e) => setTask(e.target.value);

    const id = props.tasks.length + 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {task, completed:false, id}
        props.addNewTask(newTask);
        const updatedTaskList = [...props.tasks, newTask];
        props.setTasks(updatedTaskList);
        setTask('');
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="todo-input" name='newTask' type='text' placeholder='Write your new task here' value={task} onChange={handleTaskInput}></input>
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                <button className="input-btn" type='submit'>Add task</button>
            </form>
        </div>
    )
}

export default AddNewTask;