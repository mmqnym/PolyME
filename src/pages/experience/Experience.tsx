import Container from "./Container";
import TimeLine from "./timeline/TimeLine";

import IZANALogo from "../../general/assets/organizations/IzanaIndustries.webp";
import KaijuOfCronosLogo from "../../general/assets/organizations/KaijuOfCronos.webp";
import DragonSoftLogo from "../../general/assets/organizations/dragonsoft.webp";
import AXIS3DLogo from "../../general/assets/organizations/axis3d.webp";
import N3LabsLogo from "../../general/assets/organizations/n3labs.webp";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  const timelineItems = [
    {
      title: t("experience.dragonsoft.title"),
      organization: t("experience.dragonsoft.organization"),
      location: t("experience.dragonsoft.location"),
      logo: DragonSoftLogo,
      time: t("experience.dragonsoft.time"),
      isCurrent: true,
      content: t("experience.dragonsoft.content"),
    },
    {
      title: t("experience.axis3d-1.title"),
      organization: t("experience.axis3d-1.organization"),
      location: t("experience.axis3d-1.location"),
      logo: AXIS3DLogo,
      time: t("experience.axis3d-1.time"),
      isCurrent: false,
      content: t("experience.axis3d-1.content"),
    },
    {
      title: t("experience.axis3d.title"),
      organization: t("experience.axis3d.organization"),
      location: t("experience.axis3d.location"),
      logo: AXIS3DLogo,
      time: t("experience.axis3d.time"),
      isCurrent: false,
      content: t("experience.axis3d.content"),
    },
    {
      title: t("experience.n3labs.title"),
      organization: t("experience.n3labs.organization"),
      location: t("experience.n3labs.location"),
      logo: N3LabsLogo,
      time: t("experience.n3labs.time"),
      content: t("experience.n3labs.content"),
    },
    {
      title: t("experience.izana.title"),
      organization: t("experience.izana.organization"),
      location: t("experience.izana.location"),
      logo: IZANALogo,
      time: t("experience.izana.time"),
      content: t("experience.izana.content"),
    },
    {
      title: t("experience.kaiju-of-cronos.title"),
      organization: t("experience.kaiju-of-cronos.organization"),
      location: t("experience.kaiju-of-cronos.location"),
      logo: KaijuOfCronosLogo,
      time: t("experience.kaiju-of-cronos.time"),
      content: t("experience.kaiju-of-cronos.content"),
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
