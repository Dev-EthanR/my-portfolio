import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/entities/project";

interface Props {
  data: Project;
}

const Links = ({ data }: Props) => {
  return (
    <div className="flex gap-7">
      <Link
        href={data.live}
        target="_blank"
        className="bg-primary px-4 py-1.5 "
      >
        🔗 Live Demo
      </Link>
      <Link
        href={data.github}
        target="_blank"
        className="bg-primary px-4 py-1.5 flex items-center gap-2"
      >
        <Image src="/logos/github.png" alt="Github" width={25} height={25} />
        Source Code
      </Link>
    </div>
  );
};

export default Links;
