import { fetchProduct } from "@/components/utils/sanityAPI";
import { fetchProductGuard } from "@/components/utils/types";
import Card from "@/components/views/Cards";
import Filter from "@/components/views/Filter";
import ImageContainer from "@/components/views/ImageContainer";

export default async function Thesus() {
  let products = (await fetchProduct()) as fetchProductGuard;

  return (
    <div>
      <ImageContainer
        imagePath="/images/allweather.png"
        text={"Versatile. Sustainable. Oh So Comfy!"}
        subtext="The Weekend Boot™"
      />
      <Filter totalProduct={12} />
      <Card productData={products.result} />
    </div>
  );
}
