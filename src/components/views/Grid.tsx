import Image from "next/image";
import { resultGuard } from "../utils/types";
import { urlFor } from "@/sanity/lib/image";
import { BsArrowRight } from "react-icons/bs";
import styles from "@/components/views/home.module.css";
import Link from "next/link";

export default function Grid({ productData }: { productData: resultGuard[] }) {
  const links = ["All Weather", "Rain", "Snow", "New"];
  const linksRoutes = ["/allweather", "/rain", "/snow", "/new"];

  return (
    <section className="mb-24 mt-7">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl w-9/12 leading-[60px] sm:w-full sm:leading-none sm:text-6xl font-bold sm:font-semibold sm:tracking-tight mb-6 text-customGreen text-center">
          Sustainable Outdoor Essentials
        </h1>
        <p className="text-xl sm:text-2xl leading-tight sm:leading-none font-semibold sm:font-medium w-9/12  sm:w-5/12 text-center mb-6 text-customGreen">
          {`Made with natural and recycled materials. Only a few sizes left. Get
          them before they're gone.`}
        </p>
      </div>
      <div className="px-5 w-full sm:h-96 flex flex-wrap justify-center items-center gap-1 sm:gap-2 mt-4">
        {productData.map((item, index) => (
          <Link href={linksRoutes[index]} key={index}>
            <div className={`${styles.container}`}>
              <div className="sm:w-[370px] sm:h-[370px] object-cover overflow-hidden">
                <Image
                  src={urlFor(item.image[0]).url()}
                  width={380}
                  height={380}
                  alt="shoes"
                  className={`${styles.image} w-[170px] h-[170px] sm:w-[380px] sm:h-[380px]`}
                />
              </div>
              <div className="flex items-center gap-x-2 mt-4">
                <h1 className="text-lg sm:text-xl sm:font-medium">
                  {links[index]}
                </h1>
                <BsArrowRight className={`${styles.arrow}`} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
