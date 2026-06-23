interface HeroProps {
  /** The image you're using. */
  image: string;
}

export default function Hero(props: HeroProps) {
  return (
    <header className="self-center">
      <a href="/">
        <img
          src={props.image}
          className="rounded-full w-40 mb-4 mt-8"
          alt="Joe Vaughan"
        />
      </a>
    </header>
  );
}
