// import Image from "next/image";

import tree from "@/public/images/eugene-golovesov-4aRxQKX5FU0-unsplash.jpg";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/authOptions";
import AddHeavyComponentButton from "./components/AddHeavyComponentButton";
import AddToCart from "./components/AddToCart";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main
      className=" mx-auto font-bold p-4"
      style={{
        backgroundImage: `url(${tree.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Hello {session && session.user!.name}</h1>
      <div className="py-5">
        <Link href="/users ">Users</Link>
      </div>
      <div className="py-5">
        <Link href="/users/new ">NewUsersCard</Link>
      </div>
      <AddToCart />
      <div className="py-5">
        <AddHeavyComponentButton />
      </div>
      {/* <Image
        className="object-cover grid grid-cols-1 md:grid-cols-6"
        src={tree}
        alt={"picture of tree"}
      /> */}
    </main>
  );
}
