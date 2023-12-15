import React from "react";
import PhotoPage from "./photo/[photoId]/page";
import { notFound } from "next/navigation";

interface Props {
  params: { id: number };
}

const UserDetailedPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return (
    <>
      <div>UserDetailedPage {id}</div>;
    </>
  );
};

export default UserDetailedPage;
