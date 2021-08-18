import Header from './Components/Header'
import { useState, useEffect } from 'react'
import Tasks from './Components/Tasks'
import { FaTrashRestoreAlt } from 'react-icons/fa'
import AddTask from './Components/AddTask'
import Footer from './Components/Footer'
import About from './Components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'



//useEffect hook -> used when u want something to happen when the page loads
const App = () => {
  const [ showAddTask, setShowAddTask] = useState(false)
  //if we are going to set it to true, it's going to show
  const [tasks, setTasks] = useState([])


  useEffect(() =>{
    const getTasks = async () => {
      const tasksfromServer = await fetchTasks()
      setTasks(tasksfromServer)


    }
      getTasks()
    }, [])

    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data =await res.json()

      console.log(data) 
      return data
    }
      const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)  
        const data =await res.json()
  
        console.log(data) 
        return data
      }

//     {

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
// },
 
  
// Delete task
  const deleteTask =  async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, 
    {
      method:'DELETE' //deleting tasks from server
    })



    setTasks(tasks.filter((task) => task.id !==id))

  }

  // Toggle reminder
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = {...taskToToggle, 
        reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updTask)
          
        })
        const data = await res.json()

        //this is what you're going to do on a full stack app, except of instead of using json server, u will build your own REST API with whatever framework/network u choose  

    setTasks(
      tasks.map((task) =>
      task.id== id ? {...task, reminder:
      !task.reminder } : task)
    )
    }
    //tasks is our state; where the task.id is equal to the id that is passed in;
    //spread across all the tasks, adn set the reminder false -> true and vice versa
    
    const addTask = async (task) => {
      const res = await fetch('http://localhost:5000/tasks', {
        method:'POST',
        header: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)

      })
      const data= await res.json()
      setTasks([...tasks, data]) //adding the existing tasks and the data which is the new
      //task which was created 


      // const id = Math.floor(Math.random() *1000)+1
      // const newTask = { id, ...task }
      // setTasks([...tasks, newTask])


      //by ...task we are copying whatever we passed in
    }

    //if we embed something with Router, we now can use Routes
  return (
    <Router> 

    <div className="container">
      
      <Header onAdd ={()=> setShowAddTask(!showAddTask)} showAdd = {showAddTask}/> 
      {/* {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length >0 ? (
      <Tasks tasks ={tasks} onDelete={deleteTask} 
      onToggle = {toggleReminder}/>
      ) : ( 
        "No Tasks To Show"
      )} */}
      <Route path ='/' exact render = {(props) =>
       (
         <>
         {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length >0 ? (
      <Tasks tasks ={tasks} onDelete={deleteTask} 
      onToggle = {toggleReminder}/>
      ) : ( 
        "No Tasks To Show"
      )}

         </>
       )}/>
      <Route path = '/about' component = {About}/>
      <Footer/>
      
  
    </div>
    </Router>
    //whatever we are importing, we are embedding it in the return
    // pass in our tasks component as a prop
  //we are embedding addtask; if show addTask is true then show that component. 
  //&& shorter way of doing ternary without an else
  )
  }




export default App;


//routing
// npm i react-router-dom