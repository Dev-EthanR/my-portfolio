interface Props {
  name: string;
}

const Badge = ({ name }: Props) => {
  return (
    <div className="bg-surface px-2 py-1 rounded-sm font-medium border-primary-dark border w-fit text-xs text-primary">
      {name}
    </div>
  );
};

export default Badge;
