import sideBarStyles from './styles/Sidebar.module.css'

function Sidebar () {
    return(
        // Rename the container to div
        <div className={sideBarStyles.sideBar}>
            <a href="">Home</a>
            <a href="">About</a>
        </div>
        
    );
}

export default Sidebar


