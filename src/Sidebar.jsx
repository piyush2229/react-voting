import { Link } from "react-router-dom";
import { sidebardata } from "./sidebardata";
import './Sidebar.css';  // Ensure you have some styles in Sidebar.css

function Sidebar({ isExpanded, setExpanded }) {
    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}
             onMouseOver={() => setExpanded(true)} 
             onMouseOut={() => setExpanded(false)}>
            <ul className="sidebarlist">
                {sidebardata.map((item, index) => (
                    <li key={index} className="row">
                        <Link to={item.link} style={{ textDecoration: 'none', color: 'white' }}>
                            <div className="icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div>
                                {item.title}
                                  <hr />
                            </div>
                        
                        </Link>
                        
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
