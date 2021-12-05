import React, { useState } from "react";
import Head from "next/head";
import router from "next/router";

import Button from "../components/Button";
import Error from "../components/Error";

import useLocalStorage from "../hooks/useLocalStorage";

const verification = () => {
  const [email, setEmail] = useLocalStorage("email");
  const [otp, setOTP] = useState("");

  const [error, setError] = useState("");

  const verifyOTP = async (event) => {
    try {
      event.preventDefault();
      await verifyOTP(otp);
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
        <title>Verification - Verify your new accounnt</title>
      </Head>
      <main className="relative flex flex-row justify-center items-center w-full min-h-screen py-8">
        {error && <Error error={true} message={error} />}
        <form
          className="flex flex-col justify-center my-4 items-center"
          onSubmit={(event) => verifyOTP(event)}
        >
          <h1 className="text-3xl font-bold custom-blue">Verify Email</h1>
          <h2 className="text-1xl text-gray-500 mt-4 text-center">
            To verify your email address,We have sent a OTP(One Time Password)
            to {email || "francisamidu@gmail.com"}
          </h2>
          <div className="input-group flex flex-col w-1/2 pr-4 mt-2">
            <label htmlFor="email">OTP</label>
            <input
              type="text"
              id="email"
              className="mt-2 rounded-sm w-full py-2 px-2 border-2 border-gray-200"
              onChange={(event) => setOTP(event.target.value)}
            />
          </div>
          <Button text="Verify OTP" />
        </form>
      </main>
    </>
  );
};

export default verification;
