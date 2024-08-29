"use client";
import { fetchCurrentProductDetails } from "@/components/utils/sanityAPI";
import { resultGuard } from "@/components/utils/types";
import Gallery from "@/components/views/Gallery";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Brief() {
  const params = useParams();
  const [details, setDetails] = useState<resultGuard>();

  const product = params.slug as string;

  useEffect(() => {
    fetchCurrentProductDetails(product).then((fetchedData) =>
      setDetails(fetchedData.result[0])
    );
  }, [product]);

  return (
    <section>
      <div>
        <Gallery
          imageURL={details?.image !== undefined ? details.image : []}
          productPrice={details?.price !== undefined ? details.price : " "}
          productDescription={
            details?.description[0].children[0].text !== undefined
              ? details.description[0].children[0].text
              : ""
          }
        />
      </div>
    </section>
  );
}
