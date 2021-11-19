import React, { useState } from "react";
import Head from "next/head";
import router from "next/router";

import useLocalStorage from "../hooks/useLocalStorage";

import Button from "../components/Button";

import Api from "../services/api";

const verification = () => {
  console.log(process.title);

  const { email } = useLocalStorage("email");
  const [otp, setOTP] = useState("");

  const verifyOTP = async (event) => {
    try {
      event.preventDefault();
      const response = await Api.verifyOTP(otp);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Verification - Verify your email address</title>
      </Head>
      <main className="grid grid-cols-2 w-full min-h-screen py-8">
        <section className="col-start-1 col-end-3 content-center items-center">
          <form
            className="flex flex-col justify-center my-4 items-center"
            onSubmit={(event) => verifyOTP(event)}
          >
            <h1 className="text-3xl font-bold custom-blue">Verify Email</h1>
            <h2 className="text-1xl text-gray-500 mt-4">
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
        </section>
      </main>
    </>
  );
};

export default verification;
