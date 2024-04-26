import { useState } from "react";
import UserInfoForm from "./Form/UserInfoForms";
import Navbar from "./Navbar/Navbar";

function RegistrationForm() {
  function onSubmit(values: any) {
    console.log(values);
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
