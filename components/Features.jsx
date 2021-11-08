import React, { useState } from "react";
import FeatureItem from "./FeatureItem";
const { v4: uuid } = require("uuid");

const Feature = () => {
  const [steps, setSteps] = useState([
    {
      id: uuid(),
      name: "Signup",
      image: "/signup.jpg",
      step: 1,
      text: "With your favorite credentials handy head over to the signup page and signup for an account. I'ts completely free!!!",
    },
    {
      id: uuid(),
      image: "/login.svg",
      name: "Login",
      step: 2,
      text: "After getting your account setup head over to the login page and signin.",
    },
    {
      id: uuid(),
      image: "/dashboard.svg",
      name: "Enjoy",
      step: 3,
      text: "If every went fine you should be greeted with a first time signin message in your dashboard",
    },
    {
      id: uuid(),
      image: "/social_dashboard.svg",
      name: "Customization",
      step: 4,
      text: "If you want to get the best out of this dashboard then you need to customize it. This is optional!!!",
    },
  ]);
  return (
    <section className="bg-blue-50 py-10 px-8">
      <h1 className="text-center text-4xl font-bold mb-4">
        How easy is it to get started
      </h1>
      <h2 className="text-center">
        As easy as 123. You're just 3 steps from getting trends for all the
        crypto news you wanna see
      </h2>
      <div className="flex flex-col mt-8 justify-center items-center">
        {steps.map((step) => (
          <FeatureItem image={step.image} item={step} key={step.id} />
        ))}
      </div>
    </section>
  );
};

export default Feature;
