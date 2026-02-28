"use client";
import { useState } from "react";
import Form from "./Form";
import Toast from "./Toast";

const Contact = () => {
  const [toastOpen, setToastOpen] = useState(false);
  const [statusCode, setStatusCode] = useState(0);
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-6">
        Contact me
      </h1>
      <h2 className="text-lg md:text-2xl font-medium mb-6">
        Currently seeking junior full-stack opportunities.
      </h2>
      <Form onSuccess={setToastOpen} statusCode={setStatusCode} />
      <Toast open={toastOpen} setOpen={setToastOpen} status={statusCode} />
    </div>
  );
};

export default Contact;
