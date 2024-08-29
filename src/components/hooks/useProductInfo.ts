import { useState, useEffect } from "react";
import { fetchCurrentProductDetails } from "../utils/sanityAPI";
import { resultGuard } from "../utils/types";

function useProductInfo(product: string) {
  const [info, setInfo] = useState<resultGuard>();

  useEffect(() => {
    const productInfo = async () => {
      const result = await Promise.resolve(fetchCurrentProductDetails(product));
      setInfo(result.result[0]);
    };
    productInfo();
  }, [product]);

  return [info];
}

export default useProductInfo;
