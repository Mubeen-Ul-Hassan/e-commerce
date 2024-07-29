import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Filter() {
  return (
    <section className="w-full flex flex-wrap justify-between items-center px-5 sm:px-64 py-5 sm:pt-20 text-gray-500 sm:text-black">
      <div className="hidden sm:flex gap-4">
        <h1>Filter:</h1>
        <h1 className="flex justify-between items-center gap-5 hover:underline hover:underline-offset-4 hover:duration-150">
          Size{" "}
          <span>
            <MdKeyboardArrowDown />
          </span>
        </h1>
      </div>
      <div className="flex w-full sm:w-fit justify-between sm:gap-10">
        <div className="hidden sm:flex gap-4">
          <h1>Sort by: </h1>
          <h1 className="flex gap-5 items-center hover:underline hover:underline-offset-4 hover:duration-150">
            Featured
            <span>
              <MdKeyboardArrowDown />
            </span>
          </h1>
        </div>
        <div className="sm:hidden flex items-center gap-2">
          <HiAdjustmentsHorizontal className="text-xl" />
          <h1>Filter and sort</h1>
        </div>
        <h1>5 products</h1>
      </div>
    </section>
  );
}

// Fix this filter small screen size
