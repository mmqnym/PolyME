import { WorkCardProps } from "../../../../context/workCardContext";

import screenshot1 from "../../../../general/assets/works/content/quickcerts/quickerts-1.webp";
import screenshot2 from "../../../../general/assets/works/content/quickcerts/quickerts-2.webp";

import qcsProjectLogo from "../../../../general/assets/works/preview/quickcerts.webp";
import githubLinkIcon from "../../../../general/assets/works/linkIcon/github.webp";

const quickCertsData: WorkCardProps = {
  title: "QuickCerts",
  dockIcon: { src: qcsProjectLogo, alt: "quickcerts-project-logo" },
  display: {
    imgs: [
      { src: screenshot1, alt: "quickcerts-screenshot-1" },
      { src: screenshot2, alt: "quickcerts-screenshot-2" },
    ],
  },
  links: [
    { icon: qcsProjectLogo, alt: "quickcerts-project-link", url: "#" },
    { icon: githubLinkIcon, alt: "quickcerts-github-link", url: "https://github.com/mmqnym/quickcerts" },
  ],
  description:
    "A simple certificate server that can be used to issue certificates for your product to verify that it has been activated.",
  stack: {
    languages: [
      {
        name: "Go",
        color: "bg-cyan-300",
      },
      {
        name: "TypeScript",
        color: "bg-sky-400",
      },
      {
        name: "Python",
        color: "bg-yellow-300",
      },
    ],
    skills: ["Gin", "Redis", "PostgreSQL", "Swagger", "Docker", "Nginx", "CodeQL", "codecov", "GitHub Action"],
  },
  detail: `This project aims to help developers quickly establish a certificate server for issuing certificates (keys and signatures) for your applications. You can embed the public key into your application and use the signature to verify whether the key is issued by the certificate server you have set up, achieving "product activation" functionality.
  
  Additionally, QuickCerts provides support for temporary permission. If your application requires a "trial period" or periodic authorization rather than permanent authorization, you can use the relevant API to achieve this.
  `,
};

export default quickCertsData;
