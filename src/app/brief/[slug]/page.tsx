"use client";
import useProductInfo from "@/components/hooks/useProductInfo";
import Gallery from "@/components/views/Gallery";
import { useParams } from "next/navigation";
import Hashloader from "react-spinners/HashLoader";

export default function Brief() {
  const params = useParams();

  const product = params.slug as string;
  const [info] = useProductInfo(product);

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
          <div className="h-[600px] flex justify-center items-center">
            <Hashloader color="#123026" size={70} />
          </div>
        )}
      </div>
    </section>
  );
}
