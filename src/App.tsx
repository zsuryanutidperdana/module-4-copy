import RegistrationForm from "./component/RegistrationForms";
import LoginForm from "./component/LoginForm";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 overflow-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Test</h1>} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
