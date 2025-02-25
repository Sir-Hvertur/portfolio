"use client";
import { useParams, useRouter } from "next/navigation";
import { projects } from "../../data/projects"; // Adjust path as needed
import { Image } from "lucide-react";

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
    <section className="bg-gray-50 min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top Title + Description + "Project Link" Button */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold uppercase mb-2">{project.title}</h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            This page contains the case study of {project.title} which includes
            the Project Overview, Tools Used, and Live Link to the finished
            product.
          </p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
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
              className="mx-auto shadow-lg rounded-lg"
            />
          </div>
        </div>

        {/* Project Overview Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

          <p className="text-gray-700 mb-8">
            {project.description} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Fusce feugiat, augue a pretium cursus, tellus augue
            tempor libero, nec malesuada justo ipsum a lorem.
          </p>

          {/* Tools Used */}
          <h3 className="text-xl font-bold mb-4">Tools Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              HTML
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              CSS
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              JavaScript
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              SASS
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              Git
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              GitHub
            </span>
          </div>

          {/* Bottom Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              SEE LIVE
            </a>
            <button
              onClick={() => router.back()}
              className="inline-block bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
