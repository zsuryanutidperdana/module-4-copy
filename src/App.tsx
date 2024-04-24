import RegistrationForm from "./component/RegistrationForms";
import LoginForm from "./component/LoginForm";
import HomePage from "./component/HomePage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gray-900 overflow-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
