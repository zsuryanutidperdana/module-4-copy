import RegistrationForm from "./component/RegistrationForms";
import LoginForm from "./component/LoginForm";
import HomePage from "./component/HomePage";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./schema/UserContext";
import PrivateRoutes from "./utils/PrivateRouter";
import DashboardTable from "./component/Dashboard/DashboardTable";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gray-900 overflow-auto">
      <UserContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<p>There is nothing here: 404</p>} />
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<DashboardTable />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
