import React from "react";
import Footer from "../../components/Footer";
import Image from "next/image";
import NiaLogo from "@/public/nia.png";
import LoginForm from "./login_form";
import { dreamCollection, TrajanProBold } from "../layout";

const page = () => {
  return (
    <>
      <div className="bg-[url('/bg.jpg')] bg-cover bg-no-repeat min-h-screen">
        <div className="backdrop-blur-md h-screen w-screen">
          <section className={`container`}>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className=" h-[170px] w-[170px] flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 md:h-[200px] md:w-[200px] ">
                <Image
                  src={NiaLogo}
                  alt=""
                  className="w-[150px] md:w-[180px]"
                />
              </div>
              <p
                className={`${TrajanProBold.className} text-xl md:text-3xl font-semibold text-white`}
              >
                Pangasinan IMO
              </p>
            </div>
            <div className="mt-1 flex flex-col justify-center items-center gap-2">
              <h1
                className={`${dreamCollection.className} mt-10 text-center text-4xl md:text-7xl font-bold text-white`}
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
