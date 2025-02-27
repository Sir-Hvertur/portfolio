import Link from "next/link";

//** Image credit:https:www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/ **
const Hero = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-64 px-6 md:px-12 bg-[url(/subtle-prism1.svg)] bg-cover bg-center">
        <h1 className="text-4xl font-bold">Welcome to my page</h1>
        <p className="mt-4 text-xl text-zinc-800">
          Im a currently a web developer student at Erhvervsakademi Aarhus
          looking for an internship in the fall of 2025.
        </p>
        <Link
          href="#projects"
          className="mt-6 px-6 py-3 bg-teal-600 text-white rounded-md font-semibold"
        >
          Projects
        </Link>
      </section>
    </div>
  );
};

export default Hero;
