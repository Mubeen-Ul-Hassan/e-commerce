import Image from "next/image";

export default function ImageContainer({
  imagePath,
  text,
  subtext,
}: {
  imagePath: string;
  text: string;
  subtext: string;
}) {
  return (
    <section>
      <div>
        <div className="w-full h-full sm:relative">
          <Image
            src={imagePath}
            width={1000}
            height={1000}
            alt="Shoes"
            className="w-full h-[260px] sm:h-[500px] object-cover"
            quality={100}
          />
          <div className="mt-10 mx-5 sm:mx-5 sm:absolute sm:bottom-1/3 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
            <h1 className="text-5xl font-medium sm:text-6xl sm:font-bold text-customGreen sm:text-white text-center">
              {text}
            </h1>
            <span className="text-gray-600 sm:text-white text-2xl mt-5  flex justify-center">
              {subtext}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
