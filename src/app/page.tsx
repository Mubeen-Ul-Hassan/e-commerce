import Bar from "@/components/views/Bar";
import Card from "@/components/views/Cards";
import Instagram from "@/components/views/Instagram";
import LandingPage from "@/components/views/LandingPage";
import Letter from "@/components/views/Letter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <Bar />
      <Card />
      <section className="sm:pb-40 pb-16">
        <div className="flex flex-col sm:flex-row items-center sm:gap-10 sm:mx-60">
          <div className="sm:w-[950px] sm:h-[400px] m-4 sm:m-0">
            <Image
              src="/images/long-forest.webp"
              width={500}
              height={250}
              alt="Forest"
              className="sm:w-full h-[250px] sm:h-full object-cover"
            />
          </div>
          <div className="w-8/12 text-customGreen text-center sm:relative">
            <h1 className="font-bold text-4xl leading-10 sm:leading-none sm:text-6xl pt-7 mb-8">
              No Virgin Plastic. More Nature. Less Waste.
            </h1>
            <button className="sm:absolute sm:left-52 sm:-bottom-15 bg-customGreen text-white px-5 py-2 rounded-3xl text-lg hover:scale-105 hover:shadow-lg hover:duration-150">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Instagram />
    </div>
  );
}
