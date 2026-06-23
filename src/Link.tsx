interface LinkProps {
  target: string;
  title: string;
}

export default function Link(props: LinkProps) {
  return (
    <a href={props.target} title={props.title} className="text-blue-600 font-medium">
      {props.title}
    </a>
  );
}
