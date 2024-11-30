import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-2 px-4 my-10 border rounded-md">
      <div>
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>NextAuth</Link>
        </h1>
      </div>
      <div className="flex gap-5 font-medium text-base">
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
