interface HeaderProps {
  title: string;
  subheading: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header className="mb-4">
      <h1 className="text-2xl mb-1 font-medium">{props.title}</h1>
      <h2 className="text-xl font-medium">{props.subheading}</h2>
    </header>
  );
}
