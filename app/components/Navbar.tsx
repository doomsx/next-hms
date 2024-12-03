"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import arrowleft from "@/public/arrow-left.svg";
import Image from "next/image";

function Sidebar() {
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

      {/* Sidebar */}
      <nav
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-72 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="z-50">
          <div className="relative bg-gray-50">
            <Link
              href="/"
              className="flex items-center p-2 bg-gray-50 text-gray-900 dark:text-white"
              onClick={toggleSidebar}
            >
              <span className="text-lg md:text-2xl px-5">
                Health Management System
              </span>
            </Link>
            <button
              onClick={toggleSidebar}
              className={
                !isOpen ? `hidden` : `p-5 absolute top-[-10px] right-[-50px]`
              }
            >
              <Image src={arrowleft} alt="arrow left" className="w-[28px]" />
            </button>
          </div>
          <hr />
        </div>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 z-50">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <span className="ml-3 text-base md:text-lg">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/employees"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <span className="ml-3 text-base md:text-lg">Employees</span>
              </Link>
            </li>
            <li>
              <Link
                href="/vaccines"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <span className="ml-3 text-base md:text-lg">Vaccines</span>
              </Link>
            </li>
            <li>
              <Link
                href="/medicines"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <span className="ml-3 text-base md:text-lg">Medicines</span>
              </Link>
            </li>
            <li>
              <Link
                href="/annual-physical-examination"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <span className="ml-3 text-base md:text-lg">
                  Annual Physical Examination
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/influenza-vaccine"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <span className="ml-3 text-base md:text-lg">
                  Influenza Vaccine
                </span>
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-1">
            <Link
              href="/logout"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="ml-3 text-base md:text-lg">Logout</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
