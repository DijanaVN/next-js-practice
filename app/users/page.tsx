import React from "react";
import TableComponent from "../components/TableComponent";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log(sortOrder);
  return (
    <div>
      <h1>Users</h1>
      <Link href={"/users/new"} className="btn mb-2">
        New User
      </Link>
      <TableComponent sortOrder={sortOrder} />
    </div>
  );
};

export default UsersPage;
