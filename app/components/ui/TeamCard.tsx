import Image from "next/image";
import React from "react";
import TypewriterText from "./TypewriterText";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

interface SocialLinks {
  twitter: string;
  linkedin: string;
  facebook: string;
}
interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: SocialLinks;
}

const TeamCard = ({ data }: { data: TeamMember }) => {
  return (
    <div
      className="relative rounded-2xl p-0.75 bg-linear-to-tr from-primary via-transparent to-primary group drop-shadow-[0_0_8px_var(--tw-colors-primary)]
     transition-all duration-500 hover:drop-shadow-[0_0_15px_var(--tw-colors-primary)]"
    >
      <div className="w-full h-full bg-card rounded-[13px] p-6 flex flex-col items-center">
        <div className="w-full h-48 rounded-xl overflow-hidden mb-5">
          <Image
            src={data.image}
            alt={data.name}
            width={300}
            height={300}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <TypewriterText
          text={data.name}
          className="text-white font-heading tracking-wider font-bold text-xl mb-1 group-hover:text-primary transition-colors"
        />
        <p className="text-muted-foreground text-xs mb-6 text-center">
          {data.role}
        </p>

        <div className="flex gap-4 mt-auto justify-center">
          {data.socials.twitter && (
            <a
              href={data.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] p-3 rounded-full hover:bg-primary/20 hover:scale-110 transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          )}
          {data.socials.linkedin && (
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] p-3 rounded-full hover:bg-primary/20 hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          )}
          {data.socials.facebook && (
            <a
              href={data.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] p-3 rounded-full hover:bg-primary/20 hover:scale-110 transition-all"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
