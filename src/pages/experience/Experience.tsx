import Container from "./Container";
import TimeLine from "./timeline/TimeLine";

import AXIS3DLogo from "../../general/assets/organizations/axis3d.webp";
import IZANALogo from "../../general/assets/organizations/IzanaIndustries.webp";
import KaijuOfCronosLogo from "../../general/assets/organizations/KaijuOfCronos.webp";
import N3LabsLogo from "../../general/assets/organizations/n3labs.webp";
import TMMLogo from "../../general/assets/organizations/TMM.webp";

function Experience() {
  const timelineItems = [
    {
      title: "Researcher",
      organization: "TMM Alpha．Part time",
      location: "Taiwan．Remote",
      logo: TMMLogo,
      time: "2024.06 - Now",
      isCurrent: true,
      content:
        "Experience:\n\
        1. Explore and research new projects on the TON blockchain to provide initial investment opportunities such as angel rounds and VC rounds for the community.\n\
        2. Assist in community operations.\n",
    },
    {
      title: "Backend Engineer",
      organization: "Axis3D Technology Co., LTD．Full time",
      location: "Neihu, Taipei, Taiwan",
      logo: AXIS3DLogo,
      time: "2023.05 - Now",
      isCurrent: true,
      content:
        "Stack: FFMpeg, OpenCV, FastAPI, Gin, Tauri, React, Tailwind CSS, Solidity, GCP\n\
        Experience:\n\
        1. Developed and maintained an AI-based multimedia product that, after obtaining patents, generated at least 4 million $NTD in profit for the company within half a year. This product was also used in at least 5 new projects within the company.\n\
        2. Supported the coding of backend systems and AI-related application for multiple projects.\n\
        3. Planned and developed the high concurrency backend system and related EVM contracts for a gamefi project, as well as integrated Discord and X Oauth to prevent Sybil attacks.\n\
        4. Developed and deployed a product key verification server on GCP for the company, which saved approximately 1,000 $NTD in hardware key costs for each product sold.\n\
        5. Assisted the NCDR(National Science & Technology Center for Disaster Reduction)'s project by setting up GCB (GPO), saving the company approximately 600,000 $NTD in outsourcing fees.\n\
        6. Developed AI face-swapping for the 2024 Tainan Lantern Festival, saving the company 100,000 $NTD in outsourcing fees.\n",
    },
    {
      title: "Chinese Community Manager",
      organization: "N3 Labs．Part time",
      location: "Chiyoda, Tokyo, Japan．Remote",
      logo: N3LabsLogo,
      time: "2022.10 - 2023.02．5 months",
      content:
        "Experience:\n\
        1. Assisted the team in planning and designing online events.\n\
        2. Designed art-related creations for the events.\n\
        3. Provided Web3 security recommendations.",
    },
    {
      title: "Chinese Consultant",
      organization: "IZANA INDUSTRIES Ltd．Part time",
      location: "Road Town,Tortola, British Virgin Islands．Remote",
      logo: IZANALogo,
      time: "2022.09 - 2023.02．6 months",
      content:
        "Stack: React\n\
        Experience:\n\
        1. Assisted the Japanese team in building the official website in English and Chinese, enabling over 30,000 non-Japanese users to get the latest information.\n\
        2. Provided Web3 security recommendations.\n\
        3. Helped translate the manga into English and Chinese, with the English version being published in Japan as a printed book.",
    },
    {
      title: "Junior Developer",
      organization: "Kaiju of Cronos．Part time",
      location: "USA．Remote",
      logo: KaijuOfCronosLogo,
      time: "2022.07 - 2023.01．7 months",
      content:
        "Stack: Express, React, DiscordJS, BootStrap\n\
        Experience:\n\
        1. Assisted the team in developing a discord member verification system used by over 2,000 people, saving the team ongoing bot expenses and management costs.",
    },
  ];

  return (
    <Container>
      <div className="w-3/4 xl:w-1/2">
        <TimeLine items={timelineItems} />
      </div>
    </Container>
  );
}

export default Experience;
