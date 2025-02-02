import type React from "react";
import Skill from "./Skill";
import {
  BiLogoRedux as Code2,
  BiLogoReact as ReactIcon,
  BiLogoPython as Python,
  BiLogoTypescript as TypeScript,
  BiLogoNodejs as Server,
  BiLogoGithub as Git,
  BiLogoPostgresql as Postgres,
} from "react-icons/bi";
import { SiNextdotjs as NextJS, SiFirebase as Firebase, SiJsonwebtokens as JWT } from "react-icons/si";
import { PiDotsThreeCircleDuotone } from "react-icons/pi";

type SkillIcon = {
  icon: React.ElementType;
  name: string;
};

export default function Skills() {
  const skills: SkillIcon[] = [
    { icon: Code2, name: "C++" },
    { icon: ReactIcon, name: "React" },
    { icon: Python, name: "Python" },
    { icon: TypeScript, name: "TypeScript" },
    { icon: Server, name: "Node.js" },
    { icon: Git, name: "Git" },
    { icon: NextJS, name: "Next.js" },
    { icon: Postgres, name: "Postgres" },
    { icon: Firebase, name: "Firebase" },
    { icon: JWT, name: "JWT" },
    { icon: PiDotsThreeCircleDuotone, name: "more..." }
  ];

  return (
    <div className="relative min-h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for a cool effect
      </h3>
      <div className="grid grid-cols-4 gap-5 mt-20 md:mt-8">
        {skills.map((skill, i) => (
          <Skill key={i} icon={skill.icon} name={skill.name} directionLeft={i < skills.length / 2} />
        ))}
      </div>
    </div>
  );
}
