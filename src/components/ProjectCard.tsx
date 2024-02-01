import { ProjectType } from "@/service/project";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  data: ProjectType;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  const title = data.properties.name.title[0]?.plain_text;
  // const github = data.properties.github.url;
  const description = data.properties.description.rich_text[0]?.plain_text;
  const tags = data.properties.tag.multi_select;
  const started = data.properties.workPeriod.date?.start;
  const ended = data.properties.workPeriod.date?.end;

  return (
    <Link href={`projects/${title}`}>
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
          <h1 className="text-2xl font-bold">{title}</h1>
          <h3>
            {started} ~ {ended}
          </h3>
          <h3 className="mt-4 text-xl">{description}</h3>
          {/* <a href={github}>깃허브 바로가기</a> */}
        </div>
        <div className="flex items-start m-2">
          {tags.map((tag: { id: string; name: string }) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 w-30"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </Link>
  );
}
