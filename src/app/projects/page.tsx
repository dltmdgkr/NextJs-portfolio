import ProjectCard from "@/components/ProjectCard";
// import { DATABASE_ID, TOKEN } from "../../../config";
import { ProjectType, getProjects } from "@/service/project";

export default async function Projects() {
  // const projects = await getData();
  const projects = await getProjects();

  return (
    <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
      {projects.map((project: ProjectType) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

// 빌드 타임에 호출
// export async function getData() {
//   const options = {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "Notion-Version": "2022-02-22",
//       "content-type": "application/json",
//       authorization: `Bearer ${TOKEN}`,
//     },
//     body: JSON.stringify({ page_size: 100 }),
//   };

//   const res = await fetch(
//     `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
//     options
//   );

//   return res.json();
// }
