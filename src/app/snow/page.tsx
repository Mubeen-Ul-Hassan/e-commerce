import Card from "@/components/views/Cards";
import Filter from "@/components/views/Filter";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Snow() {
  return (
    <div>
      <div className="mx-5 sm:mx-60 mt-7 sm:mt-10">
        <h1 className="text-5xl font-semibold text-customGreen">Snow</h1>
      </div>
      <Filter />
      <Card />
    </div>
  );
}
