import { fetchProduct } from "@/components/utils/sanityAPI";
import { fetchProductGuard } from "@/components/utils/types";
import Card from "@/components/views/Cards";
import Filter from "@/components/views/Filter";
import ImageContainer from "@/components/views/ImageContainer";

export default async function Rain() {
  let products = (await fetchProduct()) as fetchProductGuard;

  return (
    <div>
      <ImageContainer
        imagePath="/images/rain.png"
        text={"Waterproof. City Essential. Unisex."}
        subtext="The Anyday Rain Boot™"
      />
      <Filter totalProduct={6} />
      <Card productData={products.result.slice(3, 9)} />
    </div>
  );
}
