import { useState } from "react";
import taskListStyles from './styles/TaskList.module.css'
import Task from '../components/Task'

function TaskList({taskList}) {
    const [tasks, setTasks] = useState(taskList);

    const handleDelete = (idToDelete) => {
        
        const updatedTasks = tasks.filter(task => task.id !== idToDelete);
        setTasks(updatedTasks);
    };

    return (
        <div className={taskListStyles.taskList}>
        {tasks.map((task) => {
            return (
                <Task task={task}/> 
            )
        }) 
        }
        </div>
    )
}

export default TaskList;


