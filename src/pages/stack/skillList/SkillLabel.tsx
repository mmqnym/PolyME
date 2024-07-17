import React from "react";

interface Props {
  fill?: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  label: string;
  width?: string;
  height?: string;
}

function SkillLabel({ logo, label, fill, width = "w-10 sm:w-16", height = "h-10 sm:h-16" }: Props) {
  return (
    <div
      className={`mt-6 flex h-8 w-fit flex-row items-center justify-center gap-2 rounded-md border-2 border-amber-900/40 bg-gray-200/70 pl-2 pr-4 transition-colors duration-500 group-hover:border-amber-900/80 dark:border-purple-400/40 dark:bg-gray-700/80 dark:group-hover:border-purple-400/80 sm:mt-12 sm:h-10 sm:gap-4`}
    >
      {typeof logo === "string" ? (
        <img src={logo} alt={label} className={`${width} ${height}`} />
      ) : (
        logo && React.createElement(logo, { className: `${width} ${height} ${fill}` })
      )}
      <p className="text-base text-gray-700 dark:text-gray-300 sm:text-xl">{label}</p>
    </div>
  );
}

export default SkillLabel;
