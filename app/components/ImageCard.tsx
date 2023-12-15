import React from "react";
import Image from "next/image";

const ImageCard = () => {
  return (
    <div>
      {" "}
      <div className=" md:flex ">
        <Image
          src={"https://bit.ly/react-cover"}
          alt={"mosh logo"}
          height={200}
          width={200}
          className="px-2 py-5"
          quality={75}
          priority
        />
      </div>
    </div>
  );
};

export default ImageCard;
