"use client";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { resultGuard } from "../utils/types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/components/views/home.module.css";
/* {item.description[0].children[0].text} */

interface CardProps {
  productData: resultGuard[];
}

const Card: React.FC<CardProps> = ({ productData }) => {
  const [data, setData] = useState<resultGuard[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const result = await Promise.resolve(productData);
      setData(result);
    };
    fetchData();
  }, [productData]);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <section className="text-black mb-20 min-h-0 flex flex-col">
      <div className="sm:container px-5 sm:py-16 sm:mx-auto">
        <div className="flex justify-between sm:justify-start items-center flex-wrap gap-2 sm:gap-0">
          {memoizedData.map((product, id) => (
            <div
              className={` ${styles.container} lg:w-1/4 md:w-1/2 sm:p-1.5 w-[48%] cursor-pointer`}
              key={id}
              onClick={() => router.push(`/brief/${product.slug.current}`)}
            >
              <div className="block relative h-40 sm:h-64 sm:rounded-t-md overflow-hidden">
                <Image
                  src={urlFor(product?.image[0]).url()}
                  width={420}
                  height={260}
                  alt={product.productname}
                  className={`${styles.image} w-full h-full`}
                />
              </div>
              <div className="p-2.5 bg-customGray rounded-b-md">
                <h3 className="h-7 mb-2 font-medium tracking-tight sm:tracking-normal sm:mb-0 text-sm sm:text-bases">
                  {product.productname}
                </h3>
                <h2 className="font-medium sm:font-normal pt-3 pb-2 sm:text-2xl sm:w-3/4">
                  Rs.{product.price} PKR
                </h2>
                <div className="flex items-center gap-2 sm:gap-4">
                  <Link href={"/brief"}>
                    <p className={`${styles.text}`}>Shop Now</p>
                  </Link>
                  <BsArrowRight className={`${styles.arrow}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Card);
