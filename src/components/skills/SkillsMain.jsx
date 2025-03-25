import Heading from "../commonComponents/Heading";
import SkillCard from "./SkillCard";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "React Native",
      "HTML",
      "CSS",
      "Javascript",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "GraphQL", "SQL Server", "MongoDB"],
  },
  {
    category: "Others",
    items: ["Docker", "AWS", "CI/CD", "Git", "Webpack", "Jest"],
  },
];

const SkillsMain = () => {
  return (
    <div className="max-w-[1200px]  mt-10 mx-4 lg:mx-auto">
      <Heading text={"Skills"}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-20">
        {skills.map((skillGroup, index) => (
          <SkillCard skillGroup={skillGroup} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillsMain;
