import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="w-full sm:h-[700px]">
      <Image
        src="/images/shoebg1.jpg"
        width={1000}
        height={1000}
        alt="Three friends"
        className="sm:w-full sm:h-[700px] object-cover"
        quality={100}
      />
    </div>
  );
}
