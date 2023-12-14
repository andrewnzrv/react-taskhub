import taskList from '../assets/tasks.json'
import TaskList from '../components/TaskList';

function Home() {
    return (
        <div> 
            <TaskList taskList={taskList}/>
       </div>
    );
}

export default Home;
