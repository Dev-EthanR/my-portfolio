import Image from "next/image";

interface Props {
  imageSrc: string;
  title: string;
}

const Badge = ({ imageSrc, title }: Props) => {
  return (
    <div>
      <div className="border-border border rounded-3xl p-4 flex items-center justify-center mb-2 gap-2">
        <Image
          className="w-3 md:w-5 select-none"
          src={imageSrc}
          alt={title}
          width={50}
          height={50}
        />
        <div className=" text-gray-300 text-[10px] md:text-xs font-medium text-center uppercase">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Badge;
