import Card from "@/components/views/Cards";
import Filter from "@/components/views/Filter";
import ImageContainer from "@/components/views/ImageContainer";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Thesus() {
  return (
    <div>
      <ImageContainer
        imagePath="/images/allweather.png"
        text={"Versatile. Sustainable. Oh So Comfy!"}
        subtext="The Weekend Boot™"
      />
      <Filter />
      <Card />
    </div>
  );
}
