"use client";
import { useParams, useRouter } from "next/navigation";
import { projects } from "../../data/projects";
import Image from "next/image";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  // Find the matching project by slug
  const project = projects.find((p) => p.slug === slug);

  // Handle invalid slugs
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found</p>
      </div>
    );
  }

  return (
    <section className="bg-zinc-50 min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top Title + Description + "Project Link" Button */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold uppercase mb-2">{project.title}</h1>
          <p className="text-zinc-600 max-w-3xl mx-auto mb-6">
            This page contains an overview of {project.title}, the tools Used,
            and a link to the code repository.
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            PROJECT LINK
          </a>
        </div>

        {/* Main Image */}
        <div className="text-center mb-10">
          <div className="mt-8">
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={400}
              className="mx-auto rounded-lg"
            />
          </div>
        </div>

        {/* Project Overview Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

          <p className="text-zinc-700 mb-8">{project.description}</p>

          {/* Tools Used */}
          <h3 className="text-xl font-bold mb-4">Tools Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
            >
              See Code
            </a>
            <button
              onClick={() => router.back()}
              className="inline-block bg-zinc-300 text-zinc-800 px-6 py-3 rounded-lg font-semibold hover:bg-zinc-400 transition"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
