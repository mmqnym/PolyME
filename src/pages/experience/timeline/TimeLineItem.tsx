import TimeLineCard from "./TimeLineCard";
import TimeLineDot from "./TimeLineDot";
import TimeLineLine from "./TimeLineLine";

interface Props {
  title: string;
  organization: string;
  location: string;
  logo: string;
  time: string;
  content: string;
  isCurrent?: boolean;
  isFirst: boolean;
  isLast: boolean;
}

const TimeLineItem = ({ title, organization, location, logo, time, content, isCurrent, isFirst, isLast }: Props) => (
  <li className="relative pb-12">
    {!isLast && <TimeLineLine isFirst={isFirst} isCurrent={isCurrent} />}
    <div className="relative flex items-start">
      <TimeLineDot isFirst={isFirst} isCurrent={isCurrent} />
      <TimeLineCard
        title={title}
        organization={organization}
        location={location}
        logo={logo}
        time={time}
        content={content}
      />
    </div>
  </li>
);

export default TimeLineItem;
