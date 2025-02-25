// pages/projects/index.jsx

import Link from "next/link";
import { projects } from ".././data/projects";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <section className="bg-gray-100 py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          PROJECTS
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Here you will find some of the personal and client projects that I
          created, with each project containing its own case study.
        </p>

        {/* Projects List */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
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
                    width={300}
                    height={400}
                    className="rounded-lg mb-4 object-cover object-center"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>

              {/* Bottom section: button */}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-block self-start bg-green-600 text-white px-6 py-3 mt-6 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Case Study
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
