import { UserInfoState } from "../schema/UserContext";

export async function handleRegister(context: UserInfoState) {
  const { name, email, password } = context;

  try {
    const body = {
      name: name,
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/user/register",
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function handleLogin(context: UserInfoState) {
  const { email, password } = context;
  try {
    const body = {
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/user/login",
      options
    );
    const data = await response.json();
    localStorage.setItem("token", data.token);
  } catch (error) {
    console.error(error);
  }
}

export async function handleLogout() {
  const token = localStorage.getItem("token");
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/user/logout",
      options
    );
    if (!response.ok) {
      throw new Error("There is a problem with the network");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  localStorage.removeItem("token");
}
