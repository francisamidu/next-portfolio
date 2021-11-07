import React from "react";
import TokenItem from "./TokenItem";

const TokenIntro = () => {
  return (
    <section className="flex flex-col justify-center items-center py-4">
      <h1 className="text-4xl text-gray-600 font-bold mb-4">Token Agnostic</h1>
      <p className="text-gray-500 md:w-1/3 w-4/5 text-center mt-4">
        Aggregates all token data. From major players like Bitcoin, Ethereum to
        Dogecoin. All of the token data aggregated in one place for your
        convenience
      </p>
      <div className="my-8 flex flex-row flex-wrap md:justify-between justify-center items-center md:w-2/5 w-1/2">
        <TokenItem name="Bitcoin" image="/bitcoin-logo.png" />
        <TokenItem name="Coinbase" image="/coinbase-logo.png" />
        <TokenItem name="Dotted" image="/dotted-logo.png" />
        <TokenItem name="Ethereum" image="/ethereum-logo.png" />
        <TokenItem name="Sadan" image="/sadan-logo.png" />
        <TokenItem name="Transcript" image="/transcript-logo.png" />
      </div>
    </section>
  );
};

export default TokenIntro;
