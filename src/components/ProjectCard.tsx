import { ProjectType } from "@/service/project";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // const title = project.properties.name.title[0]?.plain_text;
  // // const github = project.properties.github.url;
  // const description = project.properties.description.rich_text[0]?.plain_text;
  // const tags = project.properties.tag.multi_select;
  // const started = project.properties.workPeriod.date?.start;
  // const ended = project.properties.workPeriod.date?.end;

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="flex flex-col m-3 rounded-xl w-full
    transition duration-300 transform border border-gray-300
    hover:scale-105
    hover:shadow-lg cursor-pointer"
      >
        <Image
          className="rounded-t-xl"
          src={"/images/그린장터.png"}
          alt="cover image"
          width={500}
          height={250}
          quality={100}
          style={{ width: "auto", height: "auto" }}
          priority
        />

        <div className="p-4 flex flex-col">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <h3>
            {project.started} ~ {project.ended}
          </h3>
          <h3 className="mt-4 text-xl">{project.description}</h3>
          {/* <a href={github}>깃허브 바로가기</a> */}
        </div>
        <div className="flex items-start m-2">
          {project.tools.map((tool) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 w-30"
              key={tool}
            >
              {tool}
            </h1>
          ))}
        </div>
      </div>
    </Link>
  );
}
