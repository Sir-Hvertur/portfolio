const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          ABOUT ME
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get to know me!</h3>
            <p className="text-gray-700 mb-4">
              I'm a <strong>Frontend Focused Web Developer</strong> building and
              managing the Front-end of Websites and Web Applications that leads
              to the success of the overall product. Check out some of my work
              in the <strong>Projects</strong> section.
            </p>
            <p className="text-gray-700 mb-4">
              I love sharing my knowledge about <strong>Web Development</strong>{" "}
              with the dev community. Feel free to connect with me on{" "}
              <a
                href="https://linkedin.com/in/rammcodes"
                className="text-blue-600 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                href="https://instagram.com/rammcodes"
                className="text-pink-600 font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              .
            </p>
            <p className="text-gray-700">
              I'm open to <strong>job opportunities</strong> where I can
              contribute, learn, and grow. If you have an opportunity that
              matches my skills, feel free to <strong>contact</strong> me.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Right Side - Skills */}
          <div>
            <h3 className="text-xl font-bold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "WordPress",
                "PHP",
                "SASS",
                "Git",
                "GitHub",
                "Responsive Design",
                "SEO",
                "Terminal",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
