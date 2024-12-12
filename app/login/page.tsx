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
      <div className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat h-screen">
        <div className="backdrop-blur-md h-full">
          <section className={`container`}>
            <div className="flex flex-col items-center justify-center mt-10 gap-2">
              <div className="h-[220px] w-[220px] flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <Image src={NiaLogo} alt="" width={200} />
              </div>
              <p
                className={`${TrajanProBold.className} text-3xl font-semibold text-white`}
              >
                Pangasinan IMO
              </p>
            </div>
            <div className="my-3 flex flex-col justify-center items-center gap-2">
              <h1
                className={`${dreamCollection.className} mt-10 text-center md:text-7xl font-bold text-white`}
              >
                Health Management System
              </h1>
              <LoginForm />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
