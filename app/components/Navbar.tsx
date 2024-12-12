"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Home from "@/public/home.svg";
import EmployeesLogo from "@/public/employees.svg";
import VaccineLogo from "@/public/vaccine.svg";
import MedicineLogo from "@/public/medicines.svg";
import ExamLogo from "@/public/exam.svg";
import HeaderLogo from "@/public/stethoscope.svg";
import { TrajanProBold } from "../login/page";
function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className={isOpen ? "hidden" : `fixed top-4 left-4 z-50`}
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <nav
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-[330px] h-screen transition-transform bg-[#71F79F] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="z-50">
          <div className="m-5 flex flex-row items-center overflow-hidden">
            <Image
              src={HeaderLogo}
              alt=""
              className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
            />
            <p
              className={`${TrajanProBold.className} text-lg md:text-xl px-5 flex flex-col`}
            >
              <span className={TrajanProBold.className}>Health</span>
              <span>Management</span>
              <span>System</span>
            </p>
            <button
              onClick={toggleSidebar}
              className={
                !isOpen ? `hidden` : `p-5 absolute top-[-10px] right-[-50px]`
              }
            ></button>
          </div>
          <div className="border border-black h-[1px] mx-3"></div>
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#71F79F] dark:bg-gray-800 z-50">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "activeNavLink" : "navLink"}
                onClick={toggleSidebar}
              >
                <Image src={Home} alt="" height={25} width={25} />
                <span className="ml-3 text-base">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/employees"
                className={
                  pathname === "/employees" ? "activeNavLink" : "navLink"
                }
                onClick={toggleSidebar}
              >
                <Image src={EmployeesLogo} alt="" height={25} width={25} />
                <span className="ml-3 text-base">Employees</span>
              </Link>
            </li>
            <li>
              <Link
                href="/vaccines"
                className={
                  pathname === "/vaccines" ? "activeNavLink" : "navLink"
                }
                onClick={toggleSidebar}
              >
                <Image src={VaccineLogo} alt="" height={25} width={25} />
                <span className="ml-3 text-base">Vaccines</span>
              </Link>
            </li>
            <li>
              <Link
                href="/medicines"
                className={
                  pathname === "/medicines" ? "activeNavLink" : "navLink"
                }
                onClick={toggleSidebar}
              >
                <Image src={MedicineLogo} alt="" height={25} width={25} />
                <span className="ml-3 text-base">Medicines</span>
              </Link>
            </li>
            <li>
              <Link
                href="/annual-physical-examination"
                className={
                  pathname === "/annual-physical-examination"
                    ? "activeNavLink"
                    : "navLink"
                }
                onClick={toggleSidebar}
              >
                <Image src={ExamLogo} alt="" height={25} width={25} />
                <span className="ml-3 text-base">
                  Annual Physical Examination
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/influenza-vaccine"
                className={
                  pathname === "/influenza-vaccine"
                    ? "activeNavLink"
                    : "navLink"
                }
                onClick={toggleSidebar}
              >
                <Image src={VaccineLogo} alt="" height={25} width={25} />
                <span className="ml-3 text-base">Influenza Vaccine</span>
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-1">
            <Link href="/login" className="navLink" onClick={toggleSidebar}>
              <span className="ml-3 text-base">Logout</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
