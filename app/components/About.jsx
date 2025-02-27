const About = () => {
  return (
    <section id="about" className="bg-zinc-50 py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          ABOUT ME
        </h2>
        <p className="text-center text-zinc-600 mb-10">
          Here you will find more information about me, what I do, and my
          current skills.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get to know me!</h3>
            <p className="text-zinc-700 mb-4">
              I am <strong>flexible</strong> and <strong>cooperative</strong>,
              able to work both independently and as a{" "}
              <strong>team player</strong>. I find it exciting to develop
              software products and have a strong{" "}
              <strong>desire to learn</strong>, as I want to improve my skills
              as much as possible. In my free time, I am interested in
              literature, computer games, and card games. Additionally, I enjoy
              climbing and strength training.
            </p>
            <p className="text-zinc-700">
              I'm open to <strong>job opportunities</strong> where I can
              contribute, learn, and grow. If you have an opportunity that
              matches my skills, feel free to <strong>contact</strong> me.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Right Side - Container for both skills sections */}
          {/* Added this container to wrap the two sections so they both appear in the right column */}
          <div className="flex flex-col gap-10">
            {/* Software experience */}
            <div>
              <h3 className="text-xl font-bold mb-4">Software experience</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "WordPress",
                  "PHP",
                  "Umbraco",
                  "Git",
                  "GitHub",
                  "Tailwind",
                  "Bootstrap",
                  "Swift",
                  "SQL",
                  "Python",
                  "Umbraco",
                  "SCRUM",
                  "XP",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {/* IT Security topics */}
            <div>
              <h3 className="text-xl font-bold mb-4">It security knowledge</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "IDS/IPS",
                  "Firewalls",
                  "Encryption",
                  "DDOS",
                  "Phishing",
                  "Awareness Training",
                  "ISO27001",
                  "GDPR & NIS2",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-zinc-200 text-zinc-800 px-4 py-2 rounded-md text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* End of Right Side container */}
        </div>
      </div>
    </section>
  );
};

export default About;
