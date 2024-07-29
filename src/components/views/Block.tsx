export default function Block({
  title,
  desc,
  button,
}: {
  title: string;
  desc: string;
  button: string;
}) {
  return (
    <div className="mx-5 sm:mx-60 text-customGreen my-14 text-left">
      <h1 className="text-5xl sm:text-6xl font-semibold">{title}</h1>
      <p className="text-xl sm:text-2xl font-bold my-6 sm:w-4/5 sm:leading-none leading-6">
        {desc}
      </p>
      <button className="bg-customGreen px-4 py-3 rounded-3xl text-xl font-medium text-white">
        {button}
      </button>
    </div>
  );
}
