
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from 'lucide-react';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  demoLink,
  githubLink,
  technologies
}) => {
  return (
    <Card className="overflow-hidden border border-gray-200 h-full flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#607CCD]/50">
      <div className="aspect-video w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>

        <CardDescription className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-[#607CCD]/10 text-[#607CCD] text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}

        </CardDescription>

      </CardHeader>
      <CardContent className="flex-grow">
                                         {title==="NRW Service Portal (wirtschaft.nrw)" ?<><p><b>Role:</b> Form Developer (Formular-Entwickler)</p><p><b>Client:</b> Ministry of Economic Affairs, NRW, Germany</p></>:undefined }

        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 pt-2">
        <Button asChild variant="outline" className="flex-1">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
       {githubLink!=="not allowed" && <Button asChild variant="outline" className="flex-1">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <Github size={16} />
            <span>Code</span>
          </a>
        </Button>}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
