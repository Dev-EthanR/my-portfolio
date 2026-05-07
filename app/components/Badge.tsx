import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
}

const Badge = ({ imageSrc, title }: Props) => {
  return (
    <div>
      <div className="border-border border rounded-3xl p-4 aspect-square flex items-center justify-center mb-4">
        <Image
          className="w-10 md:w-12.5"
          src={imageSrc}
          alt={title}
          width={50}
          height={50}
        />
      </div>
      <div className=" text-gray-300 text-xs font-medium mt-2 text-center uppercase">
        {title}
      </div>
    </div>
  );
};

export default Badge;
