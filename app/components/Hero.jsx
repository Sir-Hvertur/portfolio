import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-64 px-6 md:px-12 bg-gray-100">
        <h1 className="text-4xl font-bold">Hello</h1>
        <p className="mt-4 text-lg text-gray-600">
          Im a Result-Oriented Web Developer building and managing Websites and
          Web Applications.
        </p>
        <Link
          href="#projects"
          className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md"
        >
          Projects
        </Link>
      </section>
    </div>
  );
};

export default Hero;
