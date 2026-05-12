import { journey } from "@/data/journey";
import clsx from "clsx";

const Journey = () => {
  function isPresentDate(input: string): boolean {
    return input.toLowerCase().includes("present");
  }

  return (
    <div>
      <h2 className="text-3xl font-medium mb-4">The Journey</h2>
      <ul>
        {journey.map((data, index) => (
          <li
            key={index}
            className="py-4 border-l-2 pl-8 border-border relative"
          >
            <p
              className={clsx(
                "mb-2 text-[10px] lg:text-xs",
                isPresentDate(data.date)
                  ? "text-primary-bright"
                  : "text-text-secondary",
              )}
            >
              {data.date}
            </p>
            <h3 className="text-sm lg:text-xl mb-2">{data.title}</h3>
            <p className="text-sm lg:text-base text-[#e0bfb5] max-w-182.5">
              {data.description}
            </p>
            <div
              className={clsx(
                "absolute size-7 bg-border rounded-full border-[#191d24] border-7 -left-3.75 top-2.5 z-10",
                isPresentDate(data.date) && "bg-primary-bright",
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journey;
