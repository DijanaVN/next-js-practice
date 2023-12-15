"use client";

import React, { useState } from "react";
import ImageCard from "./ImageCard";

const AddToCart = () => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowImage((prevShowImage) => !prevShowImage);
        }}
      >
        {showImage === true ? <p>Hide image</p> : <p>Show image</p>}
      </button>
      {showImage && <ImageCard />}
    </div>
  );
};

export default AddToCart;
