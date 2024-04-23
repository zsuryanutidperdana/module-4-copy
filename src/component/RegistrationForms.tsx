import { useState } from "react";
import PersonalInfoForm from "./Form/PersonalInfoForms";
import AddressInfoForm from "./Form/AddressInfoForms";
import UserInfoForm from "./Form/UserInfoForms";

function RegistrationForm() {
  const [page, setPage] = useState<number>(1);
  function nextPage() {
    if (page >= 3) {
      return setPage(3);
    } else {
      return setPage(page + 1);
    }
  }
  function prevPage() {
    if (page === 1 || page === 0) {
      return setPage(1);
    } else {
      return setPage(page - 1);
    }
  }
  function onSubmit(values: any) {
    console.log(values);
    if (page < 3) {
      nextPage();
    }
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h2 className="text-xl text-white mb-5">
          Please fill the information below
        </h2>
        {page === 1 && <PersonalInfoForm onSubmit={onSubmit} />}
        {page === 2 && (
          <AddressInfoForm onSubmit={onSubmit} prevPage={prevPage} />
        )}
        {page === 3 && <UserInfoForm onSubmit={onSubmit} prevPage={prevPage} />}
      </div>
    </>
  );
}

export default RegistrationForm;
