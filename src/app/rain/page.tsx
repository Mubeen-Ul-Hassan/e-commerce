import Card from "@/components/views/Cards";
import Filter from "@/components/views/Filter";
import ImageContainer from "@/components/views/ImageContainer";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Rain() {
  return (
    <div>
      <ImageContainer
        imagePath="/images/rain.png"
        text={"Waterproof. City Essential. Unisex."}
        subtext="The Anyday Rain Boot™"
      />
      <Filter />
      <Card />
    </div>
  );
}
