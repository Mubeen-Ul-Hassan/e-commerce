import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { resultGuard } from "../utils/types";

interface galleryGuard {
  imageURL: resultGuard[];
  productPrice: string;
  productDescription: string;
}

export default function Gallery({
  imageURL,
  productPrice,
  productDescription,
}: galleryGuard) {
  return (
    <section className="w-full px-56 my-8">
      <div className="w-full flex">
        <div className="flex flex-wrap gap-2 w-[75%]">
          {imageURL?.map((image, id) => (
            <Image
              src={urlFor(image).url()}
              width={450}
              height={450}
              alt="Shoes"
              key={id}
            />
          ))}
        </div>
        <div className="w-[40%] pl-6">
          <h5 className="text-gray-600 uppercase text-sm">Thesus</h5>
          <h1 className="text-5xl font-medium">Anyday Rain Boot In Black</h1>
          <h1 className="text-2xl pt-6 pb-1 tracking-widest font-normal">
            Rs.{productPrice} PKR
          </h1>
          <h5 className="text-gray-600 text-sm tracking-wide">
            {" "}
            <span className="underline decoration-black underline-offset-4">
              Shipping
            </span>{" "}
            calculated at checkout.
          </h5>
          <h1 className="text-gray-600 pt-8 pb-3">Size</h1>
          <ul className="flex flex-wrap gap-3 w-11/12 [&_li]:border [&_li]:border-black [&_li]:px-6 [&_li]:py-1 [&_li]:rounded-l-full [&_li]:rounded-r-full [&_li]:cursor-pointer">
            <li className="hover:bg-black hover:text-white duration-150">36</li>
            <li className="hover:bg-black hover:text-white duration-150">37</li>
            <li className="hover:bg-black hover:text-white duration-150">38</li>
            <li className="hover:bg-black hover:text-white duration-150">39</li>
            <li className="hover:bg-black hover:text-white duration-150">40</li>
            <li className="hover:bg-black hover:text-white duration-150">41</li>
            <li className="hover:bg-black hover:text-white duration-150">42</li>
          </ul>
          {/* Add to cart button */}
          <div className="mt-16">
            <button className="w-full py-3 border shadow-md hover:shadow-lg hover:shadow-black transition-shadow ease-in-out duration-200 border-black text-center rounded-full text-lg">
              Add to cart
            </button>
          </div>
          {/* Product descriptio */}
          <p className="my-20 leading-7 text-lg text-gray-600">
            {productDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
