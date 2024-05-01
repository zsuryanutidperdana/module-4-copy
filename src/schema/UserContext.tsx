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
}

export const UserContext = createContext<UserInfoContext>({
  name: "",
  email: "",
  password: "",
  setUser: () => {},
});

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInfoState>({
    name: "",
    email: "",
    password: "",
  });
  // const handleChangeUser = (values: UserInfoState) => {
  //   setUser({
  //     name: values.name,

  //   });
  // };
  return (
    <UserContext.Provider value={{ ...user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
