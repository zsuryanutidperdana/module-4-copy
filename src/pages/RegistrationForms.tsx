import UserInfoForm from "../components/Form/UserInfoForms";
import Navbar from "../components/Navbar/Navbar";
import { UserInfoState } from "../schema/UserContext";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../utils/handleUser";

function RegistrationForm() {
  const navigate = useNavigate();

  function onSubmit(values: UserInfoState) {
    handleRegister(values);
    setTimeout(() => navigate("/"), 1000);
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full h-auto mt-20 mb-10">
        <h1 className="text-xl text-white mb-5">
          Please fill the information below
        </h1>
        <UserInfoForm onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default RegistrationForm;
