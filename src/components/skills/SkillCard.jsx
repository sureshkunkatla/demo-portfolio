import React from "react";
import TypingEffect from "./TypingEffect";
import { FiTerminal } from "react-icons/fi";

const SkillCard = ({ skillGroup }) => {
  return (
    <div className="bg-midnightBlue rounded-lg p-6 border border-slateGray shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <FiTerminal className="w-5 h-5 text-goldenYellow" />
        <h3 className="text-xl font-mono text-white">{skillGroup.category}</h3>
      </div>

      <div className="font-mono text-lg h-8">
        <span className="text-cyan">$ </span>
        <TypingEffect items={skillGroup.items} />
        <span className="animate-pulse">_</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skillGroup.items.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-mono"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
