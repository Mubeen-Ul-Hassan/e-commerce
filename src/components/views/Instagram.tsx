import Image from "next/image";

const profiles: { href: string }[] = [
  { href: "/insta1.webp" },
  { href: "/insta2.webp" },
  { href: "/insta3.webp" },
  { href: "/insta4.webp" },
];

export default function Instagram() {
  return (
    <section className="mb-24">
      <div className="w-full flex flex-wrap flex-col justify-center items-center">
        <h1 className="font-semibold text-4xl sm:text-5xl pb-8 w-1/2 leading-10 sm:leading-none text-center">
          Join Us on{" "}
          <span className="border-b border-black hover:border-b">
            Instagram
          </span>
        </h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-2 sm:gap-5">
          {profiles.map((item, index) => (
            <Image
              src={item.href}
              width={200}
              height={200}
              alt="Instagram Profiles"
              key={index}
              className="w-[180px] h-[230px] sm:w-80 sm:h-96 sm:hover:scale-110 sm:hover:shadow-lg sm:hover:duration-150 object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
