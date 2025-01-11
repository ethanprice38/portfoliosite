import Image from "next/image";

interface ProjectCardProps {
  title: string;
  dateRange: string;
  description: string;
  logoSrc?: string;
  logoAlt?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  dateRange,
  description,
  logoSrc,
  logoAlt,
  link,
}: ProjectCardProps) {
  return (
    <section className="my-5">
      <div className="flex justify-between items-start px-5">
        <div className="flex items-center space-x-4">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt={logoAlt ?? title}
              width={80}
              height={60}
              className="object-cover"
            />
          )}
          <h2 className="text-white font-mono font-extrabold text-xl">
            {title}
          </h2>
        </div>
        <div className="text-white font-mono mt-5">
          <p className="text-sm">{dateRange}</p>
        </div>
      </div>
      <div className="mt-3 px-7">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-mono tracking-tight underline hover:text-blue-300"
          >
            {link}
          </a>
        )}
        <p className="text-gray-300 font-mono">{description}</p>
      </div>
      <hr className="border-t border-white w-full mt-5" />
    </section>
  );
}
