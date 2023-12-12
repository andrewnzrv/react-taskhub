import { useState } from "react";
import taskListSyles from './styles/TaskList.module.css'

function TaskList({taskList}) {
    const [tasks, setTasks] = useState(taskList);

    return (
        <div className={taskListSyles.taskList}>
        {tasks.map((task) => {
            return (
                <div id='{task.id}' className='task'>
                    <p>{task.task}</p>
                </div>
            )
        }) 
        }
        </div>
    )
}

export default TaskList;