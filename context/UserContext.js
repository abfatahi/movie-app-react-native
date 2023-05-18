import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{ name, email, isLoggedIn, setName, setEmail, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
