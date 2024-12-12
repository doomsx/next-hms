import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";
import NiaLogo from "@/public/nia.png";
import LoginForm from "./login_form";
import localFont from "next/font/local";

export const dreamCollection = localFont({
  src: "../fonts/Dream Collection.ttf",
});

export const TrajanProBold = localFont({
  src: "../fonts/TrajanPro-Bold.otf",
});

const page = () => {
  return (
    <>
      <section className="container ">
        <div className="flex flex-col items-center justify-center mt-10 gap-2">
          <Image src={NiaLogo} alt="" width={200} />
          <p className={`${TrajanProBold.className} text-3xl font-semibold`}>
            Pangasinan IMO
          </p>
        </div>
        <div className="my-3 flex flex-col justify-center items-center gap-2">
          <h1
            className={`${dreamCollection.className} mt-10 text-center md:text-7xl font-bold`}
          >
            Health Management System
          </h1>
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
