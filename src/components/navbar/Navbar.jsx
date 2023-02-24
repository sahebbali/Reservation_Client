import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./navbar.css"
import logo from "../../../src/image/logo.png"
import { Link, NavLink } from "react-router-dom"
const Navbar = () => {
  const {user} = useContext(AuthContext);
 
  return (
    <div className="navbar">
      <div className="navContainer">
      
        <div className="logo">
          <Link to={"/"}>
          <img className="logo_img" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="userlogin">
         {user ? user.username : <div className="navItems">
           <Link to={"/login"} className="navButton">Login</Link>
          </div>}
        </div>

      </div>
    </div>
  )
}

export default Navbar