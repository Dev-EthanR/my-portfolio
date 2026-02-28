"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosSend } from "react-icons/io";
import FormLabel from "./FormLabel";
import { body } from "framer-motion/client";

interface Props {
  onSuccess: (toastOpen: boolean) => void;
  statusCode: (status: number) => void;
}

const ContactSchema = z.object({
  fullName: z.string().min(1, "Name is required").max(55),
  email: z.email().min(1, "Email is required").max(55),
  message: z
    .string()
    .min(1, "Message is required")
    .max(255, "Message cannot be more than 255 characters"),
});

export type Contact = z.infer<typeof ContactSchema>;

const Form = ({ onSuccess, statusCode }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({ resolver: zodResolver(ContactSchema) });
  const onSubmit: SubmitHandler<Contact> = async (data: Contact) => {
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify({
        data,
      }),
    });
    const status = response.status;
    reset();
    statusCode(status);
    onSuccess(true);
  };

  return (
    <form
      className="w-full max-w-180 mx-auto flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lg:grid grid-cols-2 gap-12 space-y-6 lg:space-y-0">
        <div className="flex flex-col items-center gap-y-3">
          <FormLabel id="fullName" label={errors.fullName} name="Name" />
          <input
            className="border-white border-2 rounded-full px-4 py-2  w-full"
            type="text"
            autoComplete="name"
            {...register("fullName")}
          />
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <FormLabel id="email" label={errors.email} name="Email" />
          <input
            className="border-white border-2 rounded-full px-4 py-2  w-full"
            type="email"
            {...register("email")}
            autoComplete="email"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <FormLabel id="message" label={errors.message} name="Message" />
        <textarea
          {...register("message")}
          className="border-white border-2 rounded-3xl w-full px-4 py-2 h-35 esize-none md:text-lg"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white font-medium text-xl py-3 rounded-full w-1/2 self-center hover:bg-accent cursor-pointer flex justify-center items-center gap-2"
      >
        Send
        <IoIosSend size={25} />
      </button>
    </form>
  );
};

export default Form;
