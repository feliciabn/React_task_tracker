import {useState} from 'react'




const AddTask = ({onAdd}) => {
    const [text, setText] = useState(' ')
    const [day, setDay] = useState(' ')
    const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        alert('Please add task')
        return
    }
//text, day, reminder --> objects
    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
}
//Hooks: 1. You can only use hooks inside function components, not in class componenets - 
//because classes already have their own way to do the same things as hooks do
// 2. Hooks must execute in the exact same order
    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control' onSubmit = {onSubmit}>
                <label>Task</label>
                <input type = 'text' placeholder = 'Add Task' value = {text} onChange ={(e) => setText(e.target.value)}/>
            </div>
            <div className = 'form-control'>
                <label>Day & Time</label>
                <input type = 'text' placeholder = 'Add Day and Time'
                value = {day}
                onChange = {(e) => setDay(e.target.value)}/>
            </div>
            <div className = 'form-control form-control-check'>
            <label>Set Reminder</label>
            <input 
            type = 'checkbox'
            checked = {reminder } 
            value = {reminder}
            onChange = {(e) => 
            setReminder(e.currentTarget.checked)}/>
        </div>

        <input type = 'submit' value = 'Save'
        className = 'btn btn-block'></input>
        </form>
    )
}

export default AddTask
