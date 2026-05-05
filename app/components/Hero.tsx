import Link from "next/link";
import { footerLinks } from "../Footer";

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
        <Link
          href="/projects"
          className=" px-6 py-3 bg-primary rounded-sm text-white font-medium hover:bg-primary-dark transition-colors"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-transparent border border-border text-white rounded-sm hover:bg-border transition-colors"
        >
          Get in Touch
        </Link>
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
