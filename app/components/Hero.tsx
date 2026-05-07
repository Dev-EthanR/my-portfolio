import Link from "next/link";
import { footerLinks } from "../Footer";
import Button from "./Button";

const Hero = () => {
  return (
    <header className="flex flex-col items-start mx-4 relative ">
      <p className="text-sm font-medium border-l-2 pl-2 border-primary text-primary-bright w-fit mb-4 uppercase tracking-wider">
        Full Stack Developer
      </p>
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Ethan{" "}
        <span className="text-primary-bright block text-6xl md:text-6xl">
          Rechichi
        </span>
      </h1>
      <h3 className="mb-3 text-text-subtext/70 text-sm">
        📍 Melbourne, Australia 🇦🇺
      </h3>
      <p className="text-lg font-light text-[#e0bfb5] max-w-xl">
        I build things that work, scale, and look good doing it. Focused on
        precision engineering and architectural clarity.{" "}
      </p>
      <div className="flex items-center gap-4 mt-10">
        <Button
          variant="primary"
          href="/projects"
          className="font-semibold rounded-sm text-sm md:text-base"
          size="large"
        >
          View Projects
        </Button>
        <Button
          variant="outline"
          href="/contact"
          className="font-light rounded-sm text-sm md:text-base"
          size="large"
        >
          Get in Touch
        </Button>
      </div>
      <div className="flex items-center gap-6 mt-10">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target={link?.target}
            className="flex items-center gap-2 text-gray-300/50 hover:text-gray-300 uppercase"
          >
            {link.icon}
            {link.label.includes("Email") ? "Email" : link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Hero;
