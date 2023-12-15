import React from "react";
import { notFound } from "next/navigation";
interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const PhotoPage = ({ params: { id, photoId } }: Props) => {
  if (!photoId) notFound();
  return (
    <div>
      PhotoPage{id}
      {photoId}
    </div>
  );
};

export default PhotoPage;
