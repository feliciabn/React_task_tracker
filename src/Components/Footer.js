import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021 </p>
            <Link to = "about">About</Link>
            
            {/* we can also use <a href = "about", however this would reload the page */}
        
        </footer>
    )
}

export default Footer
