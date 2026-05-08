"use client";
import Button from "@/app/components/Button";
import { Project } from "@/app/entities/project";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import Image from "next/image";

interface Props {
  data: Project;
}

const Links = ({ data }: Props) => {
  const isMobile = useIsMobile(1024);
  return (
    <div className="flex gap-7">
      <Button
        href={data.live}
        target="_blank"
        variant="primary"
        className="text-black"
        size={isMobile ? "extraSmall" : "large"}
      >
        🔗 Live Demo
      </Button>
      <Button
        href={data.github}
        target="_blank"
        className="flex items-center gap-2"
        variant="outline"
        size={isMobile ? "extraSmall" : "large"}
      >
        <Image
          src="/logos/github.png"
          alt="Github"
          width={25}
          height={25}
          className="invert"
        />
        Source Code
      </Button>
    </div>
  );
};

export default Links;
