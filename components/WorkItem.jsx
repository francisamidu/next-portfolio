import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { BsGithub, BsLink } from "react-icons/bs";

const WorkItem = ({ item }) => {
  const { image, title, github, url, tags } = item;
  const ref = useRef();
  const getWidth = () => {
    if (process.browser) {
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
      if (target.innerWidth < 640 && sibling) {
        sibling.classList.add("hidden");
      } else {
        sibling.classList.remove("hidden");
      }
    });
  }, [width]);

  return (
    <div className="work-item md:p-0 p-4 w-full mb-8 flex flex-row justify-between">
      <Image
        src={image}
        height="400"
        width="450"
        className="sm:w-0 work-item-image"
      />
      <div className="content pl-4 ml-4" ref={ref}>
        <h1 className="uppercase work-item-heading text-sm">
          Featured Project
        </h1>
        <h2 className="text-2xl text-white mt-2 work-title p-4 rounded-sm">
          {title}
        </h2>
        <div className="tags mt-8 flex flex-row items-center wrap">
          {tags?.map((tag) => (
            <span
              className="text-sm text-white font-bold capitalize py-2 px-4 mr-2 tag"
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
            <BsLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
