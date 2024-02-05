import path from "path";
import { promises as fs } from "fs";

export type ProjectType = {
  // properties: any;
  id: string;
  title: string;
  description: string;
  started: string;
  ended: string;
  image?: string;
  tools: string[];
};

export async function getProjects(): Promise<ProjectType[]> {
  const filePath = path.join(process.cwd(), "data", "projects.json");
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}
