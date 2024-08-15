import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { resultGuard } from "../utils/types";
import { urlFor } from "@/sanity/lib/image";

/* {item.description[0].children[0].text} */

export default async function Card({
  productData,
}: {
  productData: resultGuard[];
}) {
  return (
    <section className="text-black mb-20 min-h-0 flex flex-col overflow-visible">
      <div className="sm:container sm:px-5 sm:py-16 sm:mx-auto">
        <div className="flex justify-start items-center flex-wrap gap-2 sm:gap-0 min-h-0">
          {productData.map((item, index) => (
            <div
              className="lg:w-1/4 md:w-1/2 sm:p-4 w-[45%] sm:hover:scale-105 sm:hover:drop-shadow-md sm:hover:duration-100 drop-shadow-md"
              key={index}
            >
              <div className="bg-customGray">
                <a className="block relative h-40 sm:h-64 sm:rounded overflow-hidden">
                  <Image
                    src={urlFor(item.image[0]).url()}
                    width={420}
                    height={260}
                    alt="e-commerce"
                    className="w-full h-full"
                  />
                </a>
                <div className="p-5">
                  <h3 className="h-7 mb-2 font-medium tracking-tight sm:tracking-normal sm:mb-0 text-sm sm:text-bases">
                    {item.productname}
                  </h3>
                  <h2 className="font-medium sm:font-normal pt-3 pb-2 sm:text-2xl sm:w-3/4">
                    Rs.{item.price} PKR
                  </h2>
                  <div className="flex items-center gap-2 sm:gap-6">
                    <p className="hover:underline hover:underline-offset-4 cursor-pointer">
                      Shop Now
                    </p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
