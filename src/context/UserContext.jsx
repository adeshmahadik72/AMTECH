import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("amtech_user"));
    } catch {
      return null;
    }
  });

  const login = (data) => {
    setUser(data);
    localStorage.setItem("amtech_user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("amtech_user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  return useContext(UserContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { UserProvider, useUser };
