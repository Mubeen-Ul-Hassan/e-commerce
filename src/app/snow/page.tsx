import { fetchProduct } from "@/components/utils/sanityAPI";
import { fetchProductGuard } from "@/components/utils/types";
import Card from "@/components/views/Cards";
import Filter from "@/components/views/Filter";

export default async function Snow() {
  let products = (await fetchProduct()) as fetchProductGuard;

  return (
    <div>
      <div className="mx-5 sm:mx-60 mt-7 sm:mt-10">
        <h1 className="text-5xl font-semibold text-customGreen">Snow</h1>
      </div>
      <Filter totalProduct={9} />
      <Card productData={products.result.slice(0, 9)} />
    </div>
  );
}
