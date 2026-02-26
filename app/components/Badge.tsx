import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
}

const Badge = ({ imageSrc, title }: Props) => {
  return (
    <div className="relative ">
      <Image
        className="peer rounded-md w-10 md:w-12.5"
        src={imageSrc}
        alt={title}
        width={50}
        height={50}
      />
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 hidden peer-hover:block text-white font-medium bg-surface w-fit p-2 rounded-2xl">
        {title}
        <div className="absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-25 border-l-transparent border-r-25 border-r-transparent border-t-20 border-surface"></div>
      </div>
    </div>
  );
};

export default Badge;
