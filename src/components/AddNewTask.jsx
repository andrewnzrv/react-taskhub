import { useState } from "react";

function AddNewTask(props) {
    const [task, setTask] = useState('');
    const handleTaskInput = (e) => setTask(e.target.value);

    const id = props.tasks.length + 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { task, completed:false, id}
        props.addNewTask(newTask);
        const updatedTaskList = [...props.tasks, newTask];
        props.setTasks(updatedTaskList);

        setTask('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='newTask' type='text' placeholder='Write your new task here' value={task} onChange={handleTaskInput}></input>
                <button type='submit'>Add task</button>
            </form>
        </div>
    )
}

export default AddNewTask;