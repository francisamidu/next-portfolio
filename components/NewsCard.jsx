import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ item }) => {
  const {
    name,
    image,
    description,
    datePublished,
    provider,
    providerImage,
    url,
  } = item;
  return (
    <div className="news-card mb-4 mr-2 ml-2 flex-1 min-w-max bg-white rounded py-4 px-4 flex flex-1 flex-col justify-center items-center transition duration-300 hover:shadow-md">
      <Link href={url}>
        <a>
          <div className="flex flex-col">
            <Image
              src={image.thumbnail}
              width="100"
              height="100"
              className="w-full mb-4"
            />
            <h1 className="font-bold text-2xl mt-2">{name}</h1>
          </div>
          <p className="text-gray-700 mt-4">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>
          <div className="flex flex-row items-center justify-between mt-4 w-full">
            <div className="flex flex-row items-center">
              <Image
                src={providerImage}
                width="40"
                height="40"
                className="rounded-full"
              />
              <span className="font-bold text-1xl ml-4">{provider}</span>
            </div>
            <p className="text-gray-800">{datePublished}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default NewsCard;
