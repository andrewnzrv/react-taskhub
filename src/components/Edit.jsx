import { useState } from "react";
import './styles/AddNewTask.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Edit(props) {
    const [task, setTask] = useState();
   

    const handleTaskInput = (e) => setTask(e.target.value);
    const id = props.tasks.length + 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {task, completed:false, id}
        props.addNewTask(newTask);
        const updatedTaskList = [newTask,...props.tasks];
        props.setTasks(updatedTaskList);
        setTask('');
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="todo-input" name='newTask' type='text' placeholder='Write your new task here' value={task} onChange={handleTaskInput}></input>
                
                <button className="input-btn" type='submit'>Save</button>
            </form>
        </div>
    )
}

export default Edit;