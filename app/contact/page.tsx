import Form from "./Form";

const ContactPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-6">
        Contact me
      </h1>
      <h2 className="text-lg md:text-2xl font-medium mb-6">
        Currently seeking junior full-stack opportunities.
      </h2>
      <Form />
    </div>
  );
};

export default ContactPage;
