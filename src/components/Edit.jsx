import { useState } from "react";
import "./styles/AddNewTask.module.css";

function Edit(props) {
  const [task, setTask] = useState(props.task);

  const handleTaskInput = (e) => setTask(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTask(task);
    props.setEdited(false);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          name="editTask"
          type="text"
          value={task}
          onChange={handleTaskInput}
        ></input>
        <button className="input-btn" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Edit;
