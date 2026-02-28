"use client";
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  status: number;
}

const Toast = ({ open, setOpen, status }: Props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [open]);

  if (!open) return null;
  let styles = {
    background: "",
    message: "",
  };
  switch (status) {
    case 429:
      styles.background = "bg-orange-300";
      styles.message = "Too many requests, try again later.";
      break;
    case 200:
      styles.background = "bg-green-400";
      styles.message = "Successfully sent";
      break;
    case 500:
      styles.background = "bg-red-400";
      styles.message = "An unexpected error occured, try again later.";
      break;
  }

  return (
    <div
      className={`absolute bottom-12 md:top-4 left-1/2 -translate-x-1/2 ${styles.background} rounded-md  px-4 py-5 w-90 md:w-120 h-10 flex justify-center items-center `}
    >
      <p className="text-background font-medium text-sm md:text-lg">
        {styles.message}
      </p>
      <button
        className="ml-auto"
        onClick={() => {
          setOpen(false);
        }}
      >
        <IoCloseSharp color="black" size={25} />
      </button>
    </div>
  );
};

export default Toast;
