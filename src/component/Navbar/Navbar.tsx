import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
  const navigate = useNavigate();
  const navbarItems = [["Home", "/"], ["About", "/about"], ["Docs", "/documentation"]]
  return(
    <nav className={"flex w-full h-12 items-center justify-around sticky bg-blue-800 text-white text-lg"}>
      <ul className="flex w-3/12 gap-x-10">
      {navbarItems.map(([item, url], index) => (
        <li id={"navbar-item-"+index} key={index} className="hover:bg-blue-500"><a href={url}>{item}</a></li>
      ))}
      </ul>
      <div className="flex gap-x-5">
        <Button color="inherit" onClick={(e) => navigate("/login")}>Sign-in</Button>
        <Button variant="contained" color="primary" onClick={(e) => navigate("/register")}>Sign up</Button>
      </div>
    </nav>
  )
}

export default Navbar