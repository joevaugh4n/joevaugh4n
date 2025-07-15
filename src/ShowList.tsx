export interface ShowProps {
  title: string;
  location: string;
  date: Date;
  id: number;
}

export const ShowList: ShowProps[] = [
  {
    id: 0,
    title: "Healing Comedy",
    location: "Ealing",
    date: new Date("2025-07-27"),
  },
  {
    id: 1,
    title: "Ginger Giggle Comedy",
    location: "Grays",
    date: new Date("2025-07-19"),
  },
  {
    id: 2,
    title: "Low Stakes Comedy",
    location: "Streatham Hill",
    date: new Date("2025-07-30"),
  },
  {
    id: 3,
    title: "Comedy Bandits",
    location: "Clapham",
    date: new Date("2025-09-19"),
  },
];

export function Show({ title, date, location, id }: ShowProps) {
  return (
    <li className="show">
      <span className="title">{title}</span>{" "}
      <span className="location">{`(${location})`}</span> {date && "- "}{" "}
      <span className="date">
        {date.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </span>
    </li>
  );
}
