import { NavLink } from "react-router-dom";
import './styles.css';

export default function Navbar() {
   
    
    return (
      <div className="head">
        <h1>
          <a href="https://www.linkedin.com/in/scott-stone-392156231/" target='_blank'><span>S</span>cott Stone</a>
        </h1>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    )
  };
  