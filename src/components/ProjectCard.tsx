import { ProjectType } from "@/service/project";
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="flex flex-col m-3 rounded-xl w-full
    transition transform border border-gray-300
    hover:scale-105
    hover:shadow-lg cursor-pointer"
      >
        <div
          className="relative"
          style={{ flex: "1 0 auto", aspectRatio: "2 / 1" }}
        >
          <Image
            className="rounded-t-xl"
            src={`/images/${project.image}`}
            alt="cover image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="p-4 flex flex-col">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <h3>
            {project.started} - {project.ended}
          </h3>
          <h3 className="mt-4 text-xl">{project.description}</h3>
        </div>
        <div className="flex flex-wrap items-start m-4">
          {project.tools.map((tool) => (
            <span
              className="px-2 py-1 mr-2 mb-2 rounded-md bg-sky-200"
              key={tool}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
