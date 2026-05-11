"use client";
import { useState } from "react";
import Form from "./Form";
import Toast from "./Toast";
import Link from "next/link";
import { footerLinks } from "@/app/components/layout/Footer";

const Contact = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  return (
    <div className="text-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-6 text-center">
        Contact me
      </h1>
      <div className="flex flex-col lg:flex-row space-y-8 text-center lg:text-left ">
        <div className="space-y-6 lg:min-w-110">
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="w-3 h-3 bg-green-400 rounded-full" />
            <p className="uppercase tracking-wider font-extralight">
              AVAILABLE FOR WORK
            </p>
          </div>
          <h2 className="text-lg md:text-4xl font-medium mb-6 uppercase">
            Let&apos;s build{" "}
            <span className="inline-block lg:block">something</span>
          </h2>
          <p className="max-w-100 text-gray-300/80 text-sm lg:text-base mx-auto lg:mx-0">
            Currently focused on building high-performance technical
            infrastructure and intentional design systems. Based in Melbourne.
          </p>

          <div className="flex flex-col">
            <h3 className="text-lg tracking-wider text-neutral-300 font-light uppercase">
              Email Me
            </h3>
            <Link
              href={"mailto:ethanrechichi@icloud.com"}
              className="font-bold text-lg lg:text-3xl"
            >
              ethanrechichi@icloud.com
            </Link>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="text-lg tracking-wider text-neutral-300 font-light uppercase mb-1">
                Location
              </h3>
              <p className="tracking-tight"> 📍 Melbourne, AU</p>
            </div>
            <div>
              <h3 className="text-lg tracking-wider text-neutral-300 font-light uppercase mb-2">
                Socials
              </h3>
              <div className="flex justify-center items-center gap-3 lg:justify-start">
                {footerLinks
                  .filter((link) => !link.label.includes("Email"))
                  .map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link?.target}
                      className=" text-gray-300/50 hover:text-gray-300 uppercase"
                    >
                      {link.icon}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <Form onSuccess={setToastOpen} statusCode={setStatusCode} />
      </div>
      <Toast open={toastOpen} setOpen={setToastOpen} status={statusCode} />
    </div>
  );
};

export default Contact;
