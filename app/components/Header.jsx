import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    // Fixed header that spans the full width and stays on top
    <header className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/profilepic.jpeg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="ml-3 text-lg font-bold">Nikolaj Høeg Jensen</span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {/* Home => scroll to top */}
            <li>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gray-400">
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
