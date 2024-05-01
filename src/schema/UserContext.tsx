import React, {
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface UserInfoState {
  name: string;
  email: string;
  password: string;
}

export interface UserInfoContext {
  name: string;
  email: string;
  password: string;
  setUser: React.Dispatch<SetStateAction<UserInfoState>>;
  handleChangeUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserContext = createContext<UserInfoContext>({
  name: "",
  email: "",
  password: "",
  setUser: () => {},
  handleChangeUser: () => {},
});

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInfoState>({
    name: "test",
    email: "test",
    password: "test",
  });
  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <UserContext.Provider value={{ ...user, setUser, handleChangeUser }}>
      {children}
    </UserContext.Provider>
  );
};
