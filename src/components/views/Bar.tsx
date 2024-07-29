export default function Bar() {
  return (
    <div>
      <div className="w-full h-96 bg-customGreen flex flex-col gap-4 sm:gap-0 items-center justify-center text-white">
        <h1 className="font-semibold text-6xl">“Thes-us”</h1>
        <h2 className="sm:full w-3/4 font-bold text-xl  sm:text-2xl sm:my-5 text-center">
          (a theory, proven by community action)
        </h2>
        <h3 className="font-bold text-xl sm:text-2xl w-4/5 sm:w-2/4 text-center leading-6">
          We help people connect to themselves, community and the Planet.
          #BeOutside
        </h3>
      </div>

      <div className="w-full h-96 flex flex-col items-center justify-center gap-5 sm:gap-0 text-black">
        <h1 className="font-semibold text-5xl sm:text-6xl text-center">
          30% Off Site Wide
        </h1>
        <h3 className="font-bold text-xl sm:text-2xl w-4/5 sm:w-2/4 text-center sm:mt-10 leading-5">
          Shop our limited collections of award winning sustainable outdoor
          footwear. Versatile, functional and oh, so comfy.
        </h3>
      </div>
    </div>
  );
}
