export default function Letter() {
  return (
    <section className="bg-customGray w-full h-[450px] sm:h-72">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-bold sm:font-semibold text-4xl text-center sm:text-5xl text-customGreen w-[70%]">
          Join Us For The Next Phase of #Re-generation.
        </h1>
        <div className="w-fit flex justify-center items-center gap-1 mt-8">
          <input
            type="text"
            placeholder="Your e-mail"
            className="border rounded border-black py-1.5 pl-4 w-[60%] sm:w-full"
          />
          <button className="bg-customGreen font-medium sm:font-semibold text-white px-4 py-2 rounded-md sm:w-1/3">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
