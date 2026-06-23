interface LinkProps {
  target: string;
  title: string;
}

export default function Link(props: LinkProps) {
  return (
    <a
      href={props.target}
      title={props.title.charAt(0).toUpperCase() + props.title.slice(1)}
      className="text-blue-600 font-medium hover:underline"
    >
      {props.title}
    </a>
  );
}
