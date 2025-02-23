// pages/projects/index.jsx

import Link from "next/link";
import { projects } from ".././data/projects";
import { Image } from "lucide-react";

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
              className="flex flex-col md:flex-row items-center gap-6"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />

              {/* Project Details */}
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
