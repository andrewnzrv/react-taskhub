import sideBarStyles from './styles/Sidebar.module.css'
import { Link } from "react-router-dom"; 

function Sidebar () {
    return(
        // Rename the container to div
        <div className={sideBarStyles.sideBar}>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
        </div>
        
    );
}

export default Sidebar


