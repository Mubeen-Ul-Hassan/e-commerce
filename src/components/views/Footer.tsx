import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

interface footerGuard {
  label: string;
}

const ourshop: Array<footerGuard> = [
  { label: "All Products" },
  { label: "The Weekend Boot™" },
  { label: "The Anyday Rain Boot™" },
  { label: "The Modern Winter Boot™" },
  { label: "The Winter Weekend Boot Z™" },
  { label: "The Terrus™ Clog" },
  { label: "Accessories" },
  { label: "Thesus Gift Card" },
];

const help: Array<footerGuard> = [
  { label: "Size Guide" },
  { label: "Shipping Policy" },
  { label: "Refund Policy" },
  { label: "Wear and Care FAQ" },
];

const aboutus: Array<footerGuard> = [
  { label: "Values" },
  { label: "Contact Us" },
];

const transaction: { href: string }[] = [
  { href: "/images/accounts/acc1.svg" },
  { href: "/images/accounts/acc2.svg" },
  { href: "/images/accounts/acc3.svg" },
  { href: "/images/accounts/acc4.svg" },
  { href: "/images/accounts/acc5.svg" },
  { href: "/images/accounts/acc6.svg" },
  { href: "/images/accounts/acc7.svg" },
  { href: "/images/accounts/acc8.svg" },
  { href: "/images/accounts/acc9.svg" },
];

const policy: Array<footerGuard> = [
  { label: "Refund policy" },
  { label: "Privacy policy" },
  { label: "Terms of service" },
  { label: "Shipping policy" },
  { label: "Contact information" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-customGreen text-white body-font">
      <div className="container px-5 pt-8 pb-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-full px-4 sm:px-0 sm:w-72 flex-shrink-0 md:mx-0 mx-auto sm:text-center md:text-left">
          <a className="">
            <Image
              src="/images/footer.png"
              width={150}
              height={200}
              alt="Thesus"
            />
          </a>
          <p className="mt-2 text-base sm:text-lg text-white font-extrabold">
            Socially and environmentally progressive outdoor footwear
          </p>
          <div className="flex gap-6 text-xl mt-6">
            <FaFacebookSquare className="hover:scale-110" />
            <FaInstagram className="hover:scale-110" />
            <FaTiktok className="hover:scale-110" />
            <FaPinterest className="hover:scale-110" />
          </div>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left sm:text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-lg mb-3">
              Our Shop
            </h2>
            <nav className="list-none mb-10">
              {ourshop.map((item, index) => (
                <li key={index} className="my-2">
                  <Link
                    href={"/"}
                    className="text-gray-400 hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-lg mb-3">
              Help
            </h2>
            <nav className="list-none mb-10">
              {help.map((item, index) => (
                <li key={index} className="my-1">
                  <Link
                    href={"/"}
                    className="text-gray-400 hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold tracking-widest text-lg mb-3">
              About us
            </h2>
            <nav className="list-none mb-10">
              {aboutus.map((item, index) => (
                <li key={index} className="my-1">
                  <Link
                    href={"/"}
                    className="text-gray-400 hover:text-white hover:underline hover:underline-offset-4"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-customGreen border-t-[1px] border-gray-700">
        <div className="container mx-auto py-8 px-5 flex flex-wrap items-center flex-col sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:w-full w-4/5">
            {transaction.map((item, index) => (
              <Image
                src={item.href}
                width={100}
                height={100}
                alt="transaction"
                key={index}
                className="w-8 h-8"
              />
            ))}
          </div>
          <div className="sm:w-full w-3/4 flex flex-wrap justify-center gap-3 mt-3">
            {policy.map((item, index) => (
              <li
                key={index}
                className="text-gray-400 cursor-pointer hover:text-white text-xs hover:underline hover:underline-offset-4"
              >
                {item.label}
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
