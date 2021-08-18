import {FaTimes} from 'react-icons/fa'


const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder': ''}`}
         //making this into an expression with `(backticks), if the task.reminder is true, then we are going to have the class of reminder, else ''. 
         //->template literal
         onDoubleClick = {() => onToggle(task.id)}>
            <h3>{task.text} 
            <FaTimes style = {{color: 'green', cursor: 'pointer'}}
            onClick={() => onDelete(task.id)}
            />
           </h3>
            <p> {task.day}  </p>
        </div>
    )
}

export default Task
