import React, { useState } from "react";
import Link from "next/link";
import router from "next/router";
import Head from "next/head";

import { useData } from "../contexts/DataContext";
import { useAuth } from "../contexts/AuthContext";

import { SiFacebook, SiGoogle } from "react-icons/si";
import Button from "../components/Button";

import Api from "../services/api";

const Login = () => {
  const { data } = useData();
  const { setAuth } = useAuth();

  const { name, year } = data;

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const response = await Api.login(user.username, user.password);
      const { user: authUser, accessToken, refreshToken } = response;
      setAuth({ isAuthenticated: true, authUser, accessToken, refreshToken });
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Lets get you back into you dashboard</title>
      </Head>
      <main className="grid grid-cols-2 w-full min-h-screen py-8">
        <section className="h-full w-full text-blue-900 hidden md:flex md:col-start-1 md:col-end-2 overlay px-8">
          <Link href="/">
            <a className="font-bold text-3xl">{name}</a>
          </Link>
        </section>
        <section className="h-full md:col-start-2 col-start-1 col-end-3 px-8 flex flex-col">
          <h1 className="text-3xl font-bold">Welcome back to {name}</h1>
          <h2 className="text-1xl md:w-4/5 mt-2">
            Let's get you back into your dashboard
          </h2>
          <h3 className="mt-12 mb-4">
            Don't have an account?{" "}
            <Link href="/signup">
              <a className="text-blue-500">Signup</a>
            </Link>
          </h3>
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="flex flex-row items-center justify-between facebook py-2 px-4 text-white">
              <SiFacebook />
              <span className="ml-4">Login with Facebook</span>
            </div>
            <div className="flex flex-row items-center justify-between google py-2 px-4 text-white">
              <SiGoogle />
              <span className="ml-4">Login with Google</span>
            </div>
          </div>
          <div className="separator">
            <span>or</span>
          </div>
          <form
            className="flex flex-col justify-center self-center my-4 mt-0 items-center w-4/5"
            onSubmit={loginUser}
          >
            <div className="input-group flex flex-col pr-4 mt-2 w-full">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, username: event.target.value })
                }
              />
            </div>
            <div className="input-group flex flex-col pr-4 mt-2 w-full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
                onChange={(event) =>
                  setUser({ ...user, password: event.target.value })
                }
              />
            </div>
            <Button text="Login" />
          </form>
          <div className="flex flex-row justify-self-end self-end items-center justify-end text-gray-700">
            <span>
              &copy; {year} {name}
            </span>
            <span></span>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
