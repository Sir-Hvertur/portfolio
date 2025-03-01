import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-zinc-900 text-white py-4 fixed w-full top-0 z-50">
      {/* Container with flex-wrap to allow wrapping on small screens */}
      <div className="container mx-auto px-6 flex flex-wrap items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center">
          <Image
            src="/profilepic.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          {/* Adjust text size responsively: smaller on mobile, bigger on md+ */}
          <span className="ml-3 text-base sm:text-lg md:text-xl font-bold">
            Nikolaj Høeg Jensen
          </span>
        </Link>

        {/* Navigation */}
        {/* Give it a margin-top on small screens so it doesn't collide with the logo */}
        <nav className="w-full mt-4 md:mt-0 md:w-auto">
          <ul className="flex flex-wrap space-x-4 sm:space-x-6">
            <li>
              <Link href="/" className="hover:text-zinc-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-zinc-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-zinc-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-zinc-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
