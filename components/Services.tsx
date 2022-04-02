import React, { useState } from "react";
import {
  CgDesktop as IDesktop,
  CgBot as IBot,
  CgBrowser as IBrowser,
} from "react-icons/cg";
import { uid } from "../helpers";

const Services = () => {
  const [services, setServices] = useState([
    {
      id: uid(),
      icon: <IDesktop className="text-3xl text-white" />,
      name: "Fullstack Development",
      description:
        "From frontend design to backend development, I deliver bespoke and custom web experiences for your business",
    },
    {
      id: uid(),
      icon: <IBot className="text-3xl text-white" />,
      name: "Bot Development",
      description:
        "I develop useful Whatsapp, Discord & Telegram bots and Web3 bots (nft minting etc...). Contact me for your bot development needs.",
    },
    {
      id: uid(),
      icon: <IBrowser className="text-3xl text-white" />,
      name: "DAPP Development",
      description:
        "My extensive Web3 knowledge enables me to deliver wonderful blockchain apps. Reach me for your NFT,ICO and other blockchain apps",
    },
  ]);
  return (
    <section className="py-4">
      <h1 className="text-center text-2xl font-bold">Services</h1>
      <div className="flex sm:flex-row flex-col items-center justify-center mt-5">
        {services.map((s, index) => (
          <div
            className={`feature work-title rounded-sm p-8 sm:max-w-[320px] flex flex-col justify-center items-center ${
              index === 1 ? "sm:mx-4 my-2 sm:my-0" : ""
            } hover:bg-blue-500 transition duration-200 scale-1 text-center`}
            key={s.id}
          >
            <div className="mb-4">{s.icon}</div>
            <h2 className="font-bold mb-2 text-white">{s.name}</h2>
            <p className="text-[#ddd]">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
