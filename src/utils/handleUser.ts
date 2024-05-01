import { UserInfoContext } from "../schema/UserContext";

export async function handleRegister(context: UserInfoContext) {
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

export async function handleLogin(context: any) {
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
