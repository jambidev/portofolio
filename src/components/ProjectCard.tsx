import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

interface ProjectCardProps {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  id = 1,
  title = "Aplikasi Manajemen Inventaris",
  description = "Sistem manajemen inventaris berbasis web untuk memudahkan pelacakan stok barang dan pemantauan aset perusahaan.",
  image = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
  technologies = ["React", "Node.js", "MongoDB", "Express"],
  demoUrl = "#",
  githubUrl = "#",
  onClick = () => {},
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg bg-zinc-900 border-zinc-800 h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-zinc-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-zinc-300 mb-4">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t border-zinc-800">
        <Button
          variant="outline"
          size="sm"
          className="text-zinc-300 border-zinc-700 hover:bg-zinc-800"
          asChild
        >
          <a href={`/project/${id}`}>
            <Eye className="mr-2 h-4 w-4" />
            Detail
          </a>
        </Button>
        <div className="flex gap-2">
          {githubUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
