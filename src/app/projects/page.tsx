import ProjectCard from "@/components/ProjectCard";
import { ProjectType, getProjects } from "@/service/project";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
      {projects.map((project: ProjectType) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
