import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { BsGithub } from "react-icons/bs";
import { MdLink as ILink } from "react-icons/md";

const WorkItem = ({ item }) => {
  const { image, title, github, url, tags, year } = item;
  const ref = useRef();
  const getWidth = () => {
    if (process?.browser) {
      return window.innerWidth;
    }
    return 0;
  };
  const [width, setWidth] = useState(getWidth());
  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setWidth(window.innerWidth);
      const { target } = event;
      const { current } = ref;
      const sibling = current?.previousSibling;
      if (target?.innerWidth < 640 && sibling) {
        sibling?.classList?.add("hidden");
      } else {
        sibling?.classList?.remove("hidden");
      }
    });
  }, [width]);

  return (
    <div className="work-item md:p-2 min-w-[330px] p-4 w-full mb-8 flex flex-col sm:flex-row justify-between bg-[#01244183] rounded-md">
      <div className="w-full sm:w-3/5 relative pt-1 pl-1">
        <Image
          src={image}
          height="400"
          width="480"
          layout="intrinsic"
          alt="Work image"
          className="w-full work-item-image rounded-md"
        />
      </div>
      <div className="content pl-4 ml-4 w-2/5 sm:w-full" ref={ref}>
        <h1 className="uppercase font-bold work-item-heading text-sm flex-row items-center hidden sm:flex">
          <span>Featured Project</span>
          <span className="bg-blue-500 py-1 px-2 rounded text-white ml-3">
            {year}
          </span>
        </h1>
        <h2 className="text-2xl text-white my-3 rounded-sm">{title}</h2>
        <div className="tags mt-8 flex flex-row items-center wrap">
          {tags?.map((tag) => (
            <span
              className="text-sm text-white font-bold capitalize py-2 px-4 mr-2 bg-[#000b146c] rounded-md"
              key={tag.id}
            >
              {tag.text}
            </span>
          ))}
        </div>
        <div className="pl-2 mt-4 flex flex-row work-links justify-between md:justify-start items-center">
          <a href={github} className="mr-4 text-white text-3xl">
            <BsGithub />
          </a>
          <a href={url} className=" text-white text-3xl">
            <ILink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
