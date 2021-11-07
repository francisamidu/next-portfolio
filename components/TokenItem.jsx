import Image from "next/image";

const TokenItem = ({ image, name }) => {
  return (
    <div className="flex mb-2 flex-auto flex-row justify-around items-center">
      <Image src={image} width="75" height="75" />
      <span className="ml-5 text-2xl text-blue-300 hidden md:block">
        {name}
      </span>
    </div>
  );
};

export default TokenItem;
