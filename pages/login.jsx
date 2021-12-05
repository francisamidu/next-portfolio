import React, { useState } from "react";
import Link from "next/link";
import router from "next/router";
import Head from "next/head";

import Button from "../components/Button";
import FacebookButton from "../components/FacebookButton";
import GoogleButton from "../components/GoogleButton";
import Error from "../components/Toast";

import { useData } from "../contexts/DataContext";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const { data } = useData();
  const { login } = useAuth();

  const { name, year } = data;

  const [error, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      await login(user.username, user.password);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Lets get you back into you dashboard</title>
      </Head>
      <main className="relative grid grid-cols-2 w-full min-h-screen py-8">
        {error && <Error error={true} message={error} />}
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
            <FacebookButton text="Login with Facebook" />
            <GoogleButton text="Login with Google" />
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
