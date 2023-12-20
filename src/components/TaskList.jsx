import { useState } from "react";
import taskListStyles from './styles/TaskList.module.css'
import Task from '../components/Task'
import AddNewTask from "./AddNewTask";

function TaskList({taskList}) {
    const [tasks, setTasks] = useState(taskList);

    const handleDelete = (idToDelete) => {
        
        const updatedTasks = tasks.filter(task => task.id !== idToDelete);
        setTasks(updatedTasks);
    };


    

    // Add a new task
    const addNewTask = (newTask) => {};

    return (
        <div className={taskListStyles.taskList}>
        <AddNewTask tasks={tasks} setTasks={setTasks} addNewTask={addNewTask}/>
        {tasks.map((task) => {
            return (
                <Task key={task.id} task={task}/> 
            )
        }) 
        }
        
        </div>
    )
}

export default TaskList;


