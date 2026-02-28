import { FieldError } from "react-hook-form";

interface Props {
  id: string;
  label: FieldError | undefined;
  name: string;
}

const FormLabel = ({ id, label, name }: Props) => {
  return (
    <label
      htmlFor={id}
      className="self-start text-sm md:text-lg font-medium text-left"
    >
      {name}:{" "}
      {label && (
        <span className="text-red-500 block md:inline text-left mt-1 md:ml-2 md:mt-0">
          {label.message}{" "}
        </span>
      )}
    </label>
  );
};

export default FormLabel;
