import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-bold mb-8">Register</h1>
        <form>
          <input
            type="text"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none"
            placeholder="Password"
            required
          />
          <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-700 text-white py-2 rounded ">
            Register
          </button>
        </form>
        <h1 className="text-center text-slate-500 my-5">-OR-</h1>
        <h1 className="text-cyan-500 text-center hover:underline w-full">
          <Link href={"/login"}>Login with an existing account</Link>
        </h1>
      </div>
    </div>
  );
};

export default RegisterPage;
