"use client";
import useProductInfo from "@/components/hooks/useProductInfo";
import Gallery from "@/components/views/Gallery";
import { useParams } from "next/navigation";

export default function Brief() {
  const params = useParams();

  const product = params.slug as string;
  const [info] = useProductInfo(product);

  console.log(info);

  return (
    <section>
      <div>
        {info !== undefined ? (
          <Gallery
            imageURL={info.image}
            productPrice={info.price}
            productDescription={info.description[0].children[0].text}
            productName={info.productname}
          />
        ) : (
          <div className="text-center my-5 text-2xl">Loading</div>
        )}
      </div>
    </section>
  );
}
