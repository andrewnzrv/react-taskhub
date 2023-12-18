import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Task(props) {
    const [isDeleted, setIsDeleted] = useState(false);
    const [isEdited, setEdited] = useState(false);
    const [isChecked, setIsChecked] = useState(props.task.completed);

    if (isDeleted) {
        return null;
    }

    const handleDelete = () => {
        setIsDeleted(true);
    };

    const handleEdit = () => {
        setEdited(true);
        
    }

    const handleCheckbox = () => {
        // Toggle the completion status
        setIsChecked(!isChecked);
    };

    return (
        <div className='task'>
            <p>{props.task.task} {isChecked ? "COMPLETED" : "NOT COMPLETED"}</p>
            <div className="Icon-Wrapprer">
                <input type="checkbox" checked={isChecked} onChange={handleCheckbox}/>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={handleEdit}/> 
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={handleDelete}/> 
                
            </div>    
        </div>
    )

}

export default Task

