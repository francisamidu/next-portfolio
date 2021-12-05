import { SiFacebook } from "react-icons/si";

const FacebookButton = ({ text }) => {
  return (
    <div className="rounded-sm flex flex-row items-center justify-between facebook py-2 px-4 text-white">
      <SiFacebook />
      <span className="ml-4">{text}</span>
    </div>
  );
};

export default FacebookButton;
