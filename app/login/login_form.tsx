import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="mt-10">
      <Link
        href="/"
        className="text-white border px-3 py-2 hover:bg-white hover:text-black"
      >
        Login
      </Link>
    </div>
  );
};

export default LoginForm;
