import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'
 


//we are adding title and onAdd as elements since they were passed to the header tags in the app.js

const Header = ({title, onAdd, showAdd}) => {
   const location = useLocation()


    return (
        <header className = 'header'>
            <h1>{title}</h1>
            {location.pathname ==='/' && (
                
           
            <Button color = {showAdd ? 'red':'green'} text = {showAdd ? 'Close': 
        'Add'} onClick = {onAdd} />
        )}
        {/* && = > then show the button */}
        
        </header>
    )
    //by adding curling braces to color etc. we are making it more dynamic
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
Header.defaultProps = {
    title: "Task Tracker",
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'blue'
// }

 export default Header
