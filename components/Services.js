"use strict";
exports.__esModule = true;
var react_1 = require("react");
var cg_1 = require("react-icons/cg");
var helpers_1 = require("../helpers");
var Services = function () {
    var _a = (0, react_1.useState)([
        {
            id: (0, helpers_1.uid)(),
            icon: <cg_1.CgDesktop className="text-3xl text-white"/>,
            name: "Fullstack Development",
            description: "From frontend design to backend development, I deliver bespoke and custom web experiences for your business"
        },
        {
            id: (0, helpers_1.uid)(),
            icon: <cg_1.CgBot className="text-3xl text-white"/>,
            name: "Bot Development",
            description: "I develop useful Whatsapp, Discord & Telegram bots and Web3 bots (nft minting etc...). Contact me for your bot development needs."
        },
        {
            id: (0, helpers_1.uid)(),
            icon: <cg_1.CgBrowser className="text-3xl text-white"/>,
            name: "DAPP Development",
            description: "My extensive Web3 knowledge enables me to deliver wonderful blockchain apps. Reach me for your NFT,ICO and other blockchain apps"
        },
    ]), services = _a[0], setServices = _a[1];
    return (<section className="py-4">
      <h1 className="text-center text-2xl font-bold">Services</h1>
      <div className="flex sm:flex-row flex-col items-center justify-center mt-5">
        {services.map(function (s, index) { return (<div className={"feature work-title rounded-sm p-8 sm:max-w-[320px] flex flex-col justify-center items-center ".concat(index === 1 ? "sm:mx-4 my-2 sm:my-0" : "", " hover:bg-blue-500 transition duration-200 scale-1 text-center")} key={s.id}>
            <div className="mb-4">{s.icon}</div>
            <h2 className="font-bold mb-2 text-white">{s.name}</h2>
            <p className="text-[#ddd]">{s.description}</p>
          </div>); })}
      </div>
    </section>);
};
exports["default"] = Services;
