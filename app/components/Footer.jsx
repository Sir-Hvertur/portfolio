import { Linkedin, Github } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Nikolaj Høeg Jensen. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://dk.linkedin.com/in/nikolaj-h%C3%B8eg-jensen-42a482231"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Sir-Hvertur/"
            target="_blank"
            rel="noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
