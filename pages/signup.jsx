import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useData } from "../contexts/DataContext";
import { SiFacebook, SiGoogle } from "react-icons/si";
import Button from "../components/Button";

const Login = () => {
  const { data } = useData();
  const { name, year } = data;
  return (
    <>
      <Head>
        <title>Signup - Lets get you all setup</title>
      </Head>
      <main className="grid grid-cols-2 w-full min-h-screen py-8">
        <section className="h-full w-full text-blue-900 hidden md:flex md:col-start-1 md:col-end-2 overlay px-8">
          <Link href="/">
            <a className="font-bold text-3xl">{name}</a>
          </Link>
        </section>
        <section className="h-full md:col-start-2 col-start-1 col-end-3 px-8 flex flex-col">
          <h1 className="text-3xl font-bold">Welcome to {name}</h1>
          <h2 className="text-1xl md:w-4/5 mt-2">
            Let's get you all setup so you can verify your account and begin
            setting up your dashboard
          </h2>
          <h3 className="mt-12 mb-4">
            Already have an account?{" "}
            <Link href="/login">
              <a className="text-blue-500">Login</a>
            </Link>
          </h3>
          <div className="flex flex-row items-center justify-between mt-4">
            <div className="flex flex-row items-center justify-between facebook py-2 px-4 text-white">
              <SiFacebook />
              <span className="ml-4">Register with Facebook</span>
            </div>
            <div className="flex flex-row items-center justify-between google py-2 px-4 text-white">
              <SiGoogle />
              <span className="ml-4">Register with Google</span>
            </div>
          </div>
          <div className="separator">
            <span>or</span>
          </div>
          <form className="flex flex-row flex-wrap justify-between my-4 items-center">
            <div className="input-group flex flex-col w-1/2 pr-4 mt-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
              />
            </div>
            <div className="input-group flex flex-col w-1/2 pr-4 mt-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
              />
            </div>
            <div className="input-group flex flex-col w-1/2 pr-4 mt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
              />
            </div>
            <div className="input-group flex flex-col w-1/2 pr-4 mt-2">
              <label htmlFor="repeat-password">Confirm Password</label>
              <input
                type="password"
                id="repeat-password"
                className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
              />
            </div>
            <Button text="Create Account" />
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
