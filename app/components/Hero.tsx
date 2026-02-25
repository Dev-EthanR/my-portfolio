const Hero = () => {
  return (
    <header className="flex flex-col items-center  max-w-160 mx-auto">
      <h1 className="text-5xl font-semibold mb-4">Ethan Rechichi</h1>
      <h2 className="text-2xl font-light border-b border-white/25 w-fit mb-4 pb-1.5 text-center">
        Full Stack Developer
      </h2>
      <h3 className="mb-3 ">📍 Melbourne, Australia 🇦🇺</h3>
      <p className="text-sm font-light text-gray-300 border-b-accent border-b pb-2">
        Striving to be the improve each day
      </p>
    </header>
  );
};

export default Hero;
