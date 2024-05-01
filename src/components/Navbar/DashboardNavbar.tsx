import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../utils/handleUser";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const navbarItems = [["Dashboard", "/dashboard"]];
  const logout = () => {
    handleLogout();
    setTimeout(() => navigate("/"), 5000);
  };
  return (
    <nav className="flex w-full h-12 items-center justify-around sticky bg-blue-800 text-white text-lg">
      <ul className="flex w-3/12 gap-x-10">
        {navbarItems.map(([item, url], index) => (
          <li
            id={"navbar-item-" + index}
            key={index}
            className="hover:bg-blue-500"
          >
            <a href={url}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-5">
        <Button variant="contained" color="warning" onClick={logout}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
