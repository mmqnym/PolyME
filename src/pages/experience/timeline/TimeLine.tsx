import TimeLineItem from "./TimeLineItem";

interface Props {
  items: {
    title: string;
    organization: string;
    location: string;
    logo: string;
    time: string;
    isCurrent?: boolean;
    content: string;
  }[];
}

const TimeLine = ({ items }: Props) => (
  <div className="pb-24 pt-20 xl:pb-64">
    <ul>
      {items.map((item, index) => (
        <TimeLineItem
          key={index}
          title={item.title}
          organization={item.organization}
          location={item.location}
          logo={item.logo}
          time={item.time}
          content={item.content}
          isCurrent={item.isCurrent}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  </div>
);

export default TimeLine;
