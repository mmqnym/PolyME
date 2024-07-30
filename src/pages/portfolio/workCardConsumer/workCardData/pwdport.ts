import { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/pwdport/pwdport-1.webp";
import screenshot2 from "../../../../general/assets/works/content/pwdport/pwdport-2.webp";
import screenshot3 from "../../../../general/assets/works/content/pwdport/pwdport-3.webp";

import pwdportProjectLogo from "../../../../general/assets/works/preview/pwdport.webp";
import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";

const pwdPortData: WorkCardProps = {
  title: "PwdPort",
  dockIcon: { src: pwdportProjectLogo, alt: "pwdport-project-logo" },
  display: {
    imgs: [
      { src: screenshot1, alt: "pwdport-screenshot-1" },
      { src: screenshot2, alt: "pwdport-screenshot-2" },
      { src: screenshot3, alt: "pwdport-screenshot-3" },
    ],
  },
  links: [
    { icon: pwdportProjectLogo, alt: "pwdport-project-link", url: "https://pwdport.mmq.dev" },
    { icon: githubLinkIcon, alt: "pwdport-github-link", url: "https://github.com/Pwdport" },
  ],
  description: "This app helps people to generate secure passwords without having to remember too much information.",
  stack: {
    languages: [
      {
        name: "TypeScript",
        color: "bg-sky-400",
      },
    ],
    skills: ["React", "Tailwind CSS", "Vercel"],
  },
  detail: `By using this password generation tool, it can help people who are used to using the same password to have higher security, and it can also provide a better password generation tool for people who are more aware of information security.`,
};

export default pwdPortData;
