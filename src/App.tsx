import "./app.css";
import BabyWithAGun from "/baby.jpg"
import { useState } from "react";
import Bluesky from "/bluesky.svg";
import LinkedIn from "/linkedin.svg";

interface ButtonProps {
  onClickAction: (arg: React.ReactNode) => void;
  target: React.ReactNode;
  caption: string;
  setActive: (value: number) => void;
  index: number;
  isActive?: boolean;
}

function Button({
  onClickAction,
  target,
  caption,
  setActive,
  index,
  isActive,
}: ButtonProps) {
  return (
    <button
      onClick={() => {
        onClickAction(target);
        setActive(index);
      }}
      className={`menu-item ${isActive ? "active" : "inactive"}`}
    >
      {caption}
    </button>
  );
}

interface IconProps {
  url: string;
  title: string;
  icon: string;
}

function SocialIcon({ url, title, icon }: IconProps) {
  return (
    <a href={url} title={title}>
      <img src={icon} alt={title} className="social-icon" />
    </a>
  );
}

function App() {

  interface TextOption {
    /** The name. */
    title: string;
    /** React component. */
    body: React.ReactNode;
  }

  const TextOptions: TextOption[] = [{
    title: "Professional",
    body: (
      <><p>I take niche topics and show why they are <i>the</i> most important
        thing in the entire world.</p>
        <p>I run <a href="https://bsky.app/profile/themerl.bsky.social">The Museum of English Rural Life's very popular Bluesky account</a> and co-host and produce its podcast, <a href="https://merl.reading.ac.uk/explore/absolute-units/">Absolute Units</a>.</p>
        <p>I have spoken about museum social media at international conferences (like BrightonSEO and the Museum + Heritage Show) and been interviewed by international press (including NPR, Polygon, The Guardian, and BBC Radio).</p><p>I divide my time between Reading and The Internet.</p>
      </>
    )
  },
  {
    title: 'Comedian',
    body: (
      <>
        <p>I'm a baby comedian and I have started doing gigs. I'll list more here in the future (last updated 8 June 2025).</p>
      </>
    )
  },
  {
    title: 'baby with a gun',
    body: (
      <><img src={BabyWithAGun} alt='baby with a gun' />
      </>
    )
  },
  {
    title: 'Contact',
    body: (
      <>
        <a href="mailto:jbvaughan1993@gmail.com">email</a>
      </>
    )
  }
  ]

  const [text, setText] = useState<React.ReactNode>(TextOptions[0].body);
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <nav className="top-menu">
        <SocialIcon
          title="Bluesky"
          icon={Bluesky}
          url="https://bsky.app/profile/joevaughan.net"
        />
        <SocialIcon
          title="LinkedIn"
          icon={LinkedIn}
          url="https://www.linkedin.com/in/joevaugh4n/"
        />
      </nav>
      <header>
        <h1>Joe Vaughan</h1>
        <p className="intro">
          rest in peace pirates you would have loved hookup culture
        </p>
        <nav className="menu">
          {TextOptions.map((option, i) => (
            <Button
              key={option.title}
              onClickAction={setText}
              setActive={setActive}
              target={option.body}
              caption={option.title}
              index={i}
              isActive={active === i}
            />
          ))}
        </nav>
      </header>
      {
        text != "" && TextOptions[active].title.toLowerCase() != 'baby with a gun' ? <p className="highlight-text">{text}</p> : <div>{text}</div>
      }
    </div>
  );
}

export default App;
