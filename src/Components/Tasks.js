// const tasks = [{
//     id: 1,
//     text: 'Doctors Appointment',
//     day: 'Feb 5th at 2:30pm',
//     reminder: true,

// },
// {
//     id: 2,
//     text: 'Meeting at School',
//     day: 'Feb 6th at 1:30pm',
//     reminder: true,

// }, {
//     id: 3,
//     text: 'Food shopping',
//     day: 'Feb 6th at 2:50pm',
//     reminder: false,
// }]


// import { useState } from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    // const [tasks, setTasks] = useState([
        //if we want to change any part of our state, we use setTasks
        //State is immutable, we cannot do tasks.push()
    //     {

    //         id: 1,
    //         text: 'Doctors Appointment',
    //         day: 'Feb 5th at 2:30pm',
    //         reminder: true,
        
    //     },
    //     {
    //         id: 2,
    //         text: 'Meeting at School',
    //         day: 'Feb 6th at 1:30pm',
    //         reminder: true,
        
    //     }, {
    //         id: 3,
    //         text: 'Food shopping',
    //         day: 'Feb 6th at 2:50pm',
    //         reminder: false,
    //     },
    // ]) 

    return (
        
        <>
            {tasks.map((task, index) => (
                <Task key = {index} task = {task} onDelete = {onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks


//JSON api lets us create a mock rest api with our own data