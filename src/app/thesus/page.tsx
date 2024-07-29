import Block from "@/components/views/Block";
import ImageContainer from "@/components/views/ImageContainer";
import Image from "next/image";

const blockContent = [
  {
    title: "The Weekend Boot™ Impact",
    desc: "We have removed 25,000 lbs of plastic from our oceans and landfill, kept tens of of thousands of trees firmly planted in the ground, minimized our dependence on the leather and fossil fuel industry, supported family-run producer partners in lieu of exploiting cheap labour and disposable lives in the Global South, walked a collective 3.2 million miles, and help to inspire hundreds of thousands of people to Be Outside; connecting to themselves, the community and the Planet.",
    button: "Read Our Open Letter",
  },
];

const imageContent = [
  { src: "/insta1.webp" },
  { src: "/insta2.webp" },
  { src: "/insta3.webp" },
];

export default function Thesus() {
  return (
    <div>
      <ImageContainer imagePath="/images/hub.png" subtext="" text={""} />
      {blockContent.map((item, index) => (
        <Block
          title={item.title}
          desc={item.desc}
          button={item.button}
          key={index}
        />
      ))}
      <div className="mx-5 sm:mx-60 flex justify-center flex-wrap gap-5 mb-10">
        {imageContent.map((item, index) => (
          <Image
            src={item.src}
            width={400}
            height={400}
            alt="instagram"
            quality={85}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
