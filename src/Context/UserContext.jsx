import React, { createContext, useState } from "react";
import { TOKEN_POST, USER_GET } from "../api";

const UserContext = createContext();

function UserContextStorage({ children }) {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUser(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem("token", token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, user }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextStorage };
