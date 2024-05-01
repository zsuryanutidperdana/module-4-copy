import { useContext, useEffect } from "react";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";
import DashboardTable from "../components/Dashboard/DashboardTable";
import { UserContext } from "../schema/UserContext";

const DashboardPage = () => {
  const { name, email, setUser } = useContext(UserContext);
  useEffect(() => {
    async function getUserData() {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(
          "https://library-crud-sample.vercel.app/api/user/profile",
          options
        );
        if (!response.ok) {
          throw new Error("There is a problem with the network");
        }
        const data = await response.json();
        setUser((prevData) => ({
          ...prevData,
          name: data.name,
          email: data.email,
        }));
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, []);
  return (
    <section className="flex flex-col items-center w-full h-full">
      <DashboardNavbar />

      <h1 className="block text-2xl text-white">
        Welcome {name}!, Email {email}
      </h1>

      <DashboardTable />
    </section>
  );
};

export default DashboardPage;
