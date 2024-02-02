import { getMarkdownFile } from "@/service/markdown";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetail({
  params: { slug },
}: ProjectDetailPageProps) {
  const markdown = await getMarkdownFile(slug);

  return <div>{markdown}</div>;
}
