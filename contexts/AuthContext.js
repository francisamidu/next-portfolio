import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../shared/constants";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    accessToken: "",
    refreshToken: "",
    otp: "",
  });
  const [otp, setOTP] = useLocalStorage("otp");
  //For logging in user
  const login = async (username, password) => {
    try {
      const request = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      if (!response?.success) {
        throw new Error("Sorry Login failed");
      }
      const { user: authUser, accessToken, refreshToken } = response;
      setAuth({ isAuthenticated: true, authUser, accessToken, refreshToken });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      throw error;
    }
  };
  //For signing up new users
  const signup = async (email, username, password) => {
    try {
      const request = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { message, otp, success } = await request.json();
      if (success) {
        setAuth({ ...auth, otp });
        setOTP(otp);
      } else {
        throw new Error(message);
      }
    } catch (error) {
      throw error;
    }
  };
  //For logging out users
  const logout = async (accessToken, refreshToken) => {
    try {
      await fetch(`${BASE_URL}/auth/logout`, {
        method: "DELETE",
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAuth({
        isAuthenticated: false,
        accessToken: "",
        refreshToken: "",
        otp: "",
        user: null,
      });
    } catch (error) {
      throw error;
    }
  };
  //For account verification
  const verifyOTP = async (otp) => {
    try {
      await fetch(`${BASE_URL}/auth/verify`, {
        method: "POST",
        body: JSON.stringify({
          otp,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAuth({ ...auth, otp: "" });
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, signup, verifyOTP }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
