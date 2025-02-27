import Link from "next/link";
import { projects } from ".././data/projects";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <section id="projects" className="bg-zinc-100 py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          PROJECTS
        </h2>

        <p className="text-center text-zinc-600 mb-10">
          Here you will find some of the coding projects that I have created.
        </p>

        {/* Projects List */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => {
            // Determine image dimensions based on the halfSize attribute
            const imgWidth = project.halfSize ? 150 : 300;
            const imgHeight = project.halfSize ? 200 : 400;

            return (
              <div
                key={project.slug}
                className="flex flex-col justify-between bg-white p-6 rounded-lg shadow h-full"
              >
                {/* Top section: image + text */}
                <div>
                  <div className="flex justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={imgWidth}
                      height={imgHeight}
                      className="rounded-lg mb-4 object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-700">{project.description}</p>
                </div>

                {/* Bottom section: button */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block self-start bg-teal-600 text-white px-6 py-3 mt-6 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  See more
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
