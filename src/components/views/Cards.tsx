import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

interface itemStoreGuard {
  url: string;
  price: string;
  desc: string;
}

const itemStore: Array<itemStoreGuard> = [
  {
    url: "/images/shoes/item5.png",
    price: "Now $139 USD",
    desc: "Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
  },
  {
    url: "/images/shoes/item2.png",
    price: "Now $139 USD",
    desc: "Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
  },
  {
    url: "/images/shoes/item3.png",
    price: "Now $139 USD",
    desc: "Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
  },
  {
    url: "/images/shoes/item4.png",
    price: "Now $139 USD",
    desc: "Weekend Boot in Allegra - Water Resistant. All Year. $198 USD",
  },
];

export default function Card() {
  return (
    <section className="text-black body-font mb-20">
      <div className="sm:container sm:px-5 sm:py-16 sm:mx-auto">
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-0 sm:-m-4">
          {itemStore.map((item, index) => (
            <div
              className="lg:w-1/4 md:w-1/2 sm:p-4 w-[45%] sm:hover:scale-105 sm:hover:drop-shadow-md sm:hover:duration-100 drop-shadow-md"
              key={index}
            >
              <div className="bg-customGray">
                <a className="block relative h-40 sm:h-64 sm:rounded overflow-hidden">
                  <Image
                    src={item.url}
                    width={420}
                    height={260}
                    alt="ecommerce"
                    className="w-full h-full"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold tracking-widest title-font">
                    {item.price}
                  </h3>
                  <h2 className="title-font text-xs sm:text-sm font-medium mt-3 mb-6 sm:w-3/4">
                    {item.desc}
                  </h2>
                  <div className="flex items-center gap-2 sm:gap-6">
                    <p className="hover:underline hover:underline-offset-4">
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
