import type { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/cpe23-conversion-tool/cpe23-tool-1.png";
import screenshot2 from "../../../../general/assets/works/content/cpe23-conversion-tool/cpe23-tool-2.png";
import screenshot3 from "../../../../general/assets/works/content/cpe23-conversion-tool/cpe23-tool-3.png";

import cpe23ProjectLogo from "../../../../general/assets/organizations/dragonsoft.webp";

const cpe23ConversionToolData: WorkCardProps = {
  title: "CPE23 Conversion Tool",
  dockIcon: { src: cpe23ProjectLogo, alt: "cpe23-project-logo" },
  display: {
    imgs: [
      { src: screenshot1, alt: "cpe23-screenshot-1" },
      { src: screenshot2, alt: "cpe23-screenshot-2" },
      { src: screenshot3, alt: "cpe23-screenshot-3" },
    ],
  },
  links: [{ icon: cpe23ProjectLogo, alt: "cpe23-project-link", url: "#" }],
  description: "portfolio.cpe23-conversion-tool.about",
  stack: {
    languages: [
      {
        name: "Go",
        color: "bg-cyan-300",
      },
    ],
    skills: ["Cobra", "SQLite"],
  },
  detail: "portfolio.cpe23-conversion-tool.detail",
};

export default cpe23ConversionToolData;
