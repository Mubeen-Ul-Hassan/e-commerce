"use client";
import { fetchCurrentProductDetails } from "@/components/utils/sanityAPI";
import { resultGuard } from "@/components/utils/types";
import Gallery from "@/components/views/Gallery";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { TbListDetails } from "react-icons/tb";

export default function Brief() {
  const params = useParams();
  const [details, setDetails] = useState<resultGuard>();

  const product = params.slug as string;

  useEffect(() => {
    fetchCurrentProductDetails(product).then((fetchedData) =>
      setDetails(fetchedData.result[0])
    );
  }, [product]);

  console.log(details);

  return (
    <section>
      <div>
        <Gallery
          imageURL={details?.image}
          productPrice={details?.price}
          productDescription={details?.description[0].children[0].text}
        />
      </div>
    </section>
  );
}
