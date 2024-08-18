"use client";
import { IoSearchOutline } from "react-icons/io5";
import { SlBag } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface navGuard {
  label: string;
  href: string;
}

const nav: navGuard[] = [
  { label: "New", href: "/new" },
  { label: "Rain", href: "/rain" },
  { label: "Snow", href: "/snow" },
  { label: "All Weather", href: "/allweather" },
  { label: "Thesus™ Collaboration Hub", href: "thesus" },
];

export default function Navbar() {
  let [dropDown, setDropDown] = useState(false);
  const path = usePathname();
  return (
    <header className="text-gray-600 body-font sm:relative z-10 bg-white">
      <div className="container mx-auto flex sm:flex-wrap p-5 sm:flex-col md:flex-row items-center justify-between">
        <div
          className="text-2xl sm:hidden"
          onClick={() => setDropDown(!dropDown)}
        >
          {dropDown ? <RxCross2 /> : <AiOutlineMenu />}
        </div>
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 sm:mb-4 md:mb-0"
        >
          <Image
            src="/images/logo.png"
            width={200}
            height={50}
            alt="Logo"
            className="h-22 w-28"
          />
        </Link>
        <nav
          className={`w-11/12 h-[100vh] absolute z-10 top-[110px] overflow-hidden ${
            dropDown ? "left-0 duration-300" : "-left-full duration-300"
          } bg-white px-10 py-20 text-2xl text-slate-600 sm:w-fit sm:h-fit sm:relative sm:left-0 sm:top-0 sm:bg-transparent md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:text-base sm:justify-center list-none`}
        >
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                key={index}
                className={` ${path == item.href ? " bg-b sm:underline sm:underline-offset-4 sm:text-black duration-150" : ""} mr-5 hover:text-black hover:underline hover:underline-offset-4 transition-all ease-in-out duration-150`}
                onClick={() => setDropDown(!dropDown)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </nav>
        <div className="flex gap-6 items-center text-2xl cursor-pointer ">
          <IoSearchOutline />
          <VscAccount className="hidden sm:block" />
          <SlBag />
        </div>
      </div>
    </header>
  );
}
