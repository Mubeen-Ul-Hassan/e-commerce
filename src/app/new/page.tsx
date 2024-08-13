import { fetchProduct } from "@/components/utils/sanityAPI";
import { fetchProductGuard } from "@/components/utils/types";
import Card from "@/components/views/Cards";
import Filter from "@/components/views/Filter";
import Image from "next/image";

export default async function New() {
  let products = (await fetchProduct()) as fetchProductGuard;
  return (
    <div>
      <section>
        <div>
          <div className="w-full h-full relative">
            <Image
              src={"/images/newbg.jpg"}
              width={1000}
              height={1000}
              alt="Shoes"
              className="w-full h-[260px] sm:h-[500px] object-cover"
              quality={100}
            />
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-4xl sm:text-6xl font-bold text-white text-center">
                New In
              </h1>
            </div>
          </div>
        </div>
      </section>
      <Filter totalProduct={8} />
      <Card productData={products.result.slice(0, 8)} />
    </div>
  );
}
