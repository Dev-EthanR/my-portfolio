"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoIosSend } from "react-icons/io";
import FormLabel from "./FormLabel";

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
      className="w-full max-w-220 mx-auto flex flex-col gap-6 bg-surface p-8 border-border border rounded-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="lg:grid grid-cols-2 gap-12 space-y-6 lg:space-y-0">
        <div className="flex flex-col items-center gap-y-3">
          <FormLabel id="fullName" label={errors.fullName} name="Name" />
          <input
            className="border-white/20 border-b  py-2  w-full outline-0"
            type="text"
            autoComplete="name"
            placeholder="Ethan Rechichi"
            {...register("fullName")}
          />
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <FormLabel id="email" label={errors.email} name="Email" />
          <input
            className="border-white/20 border-b  py-2  w-full outline-0"
            type="email"
            {...register("email")}
            placeholder="ethan@example.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <FormLabel id="message" label={errors.message} name="Message" />
        <textarea
          {...register("message")}
          className="border-white/20 border-b  w-full  py-2 h-35 size-none md:text-lg outline-0 overflow-auto"
          placeholder="I'm looking to connect regarding..."
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
