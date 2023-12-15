import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col ">
      <div className="flex">
        <aside className="bg-slate-200 p-5 mr-5">Admin sidebar</aside>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
