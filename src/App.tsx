import "./app.css";
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
  const [text, setText] = useState<React.ReactNode>("");
  const [active, setActive] = useState(0);
  const career = {
    title: "Career",
    body: (
      <>
        Currently, I'm the marketing lead at{" "}
        <a href="https://merl.reading.ac.uk/">Museum of English Rural Life</a>.
        I previously worked at MERL and{" "}
        <a href="https://www.readingmuseum.org.uk/">Reading Museum</a> from
        2019-2023. From 2023-2024 I was the first marketing hire at{" "}
        <a href="https://storybook.js.org">Storybook</a>, one of the world's
        most popular tools for app development. Before then, I was a copywriter
        for a bunch of brands (including UK household names).
      </>
    ),
  };

  const contact = (
    <>
      The best place is probably{" "}
      <a href="https://www.linkedin.com/in/joevaugh4n/">LinkedIn!</a>
    </>
  );

  const website = (
    <>
      I love making websites and coding. I made this myself using HTML, CSS and
      JavaScript. I find web development extremely satisfying and have done a
      few websites as freelance projects for my friends, including{" "}
      <a href="https://adamkoszary.co.uk/">Adam Koszary</a> and{" "}
      <a href="https://happypandareading.co.uk/">Happy Panda Reading</a>. If you
      ever need web help, reach out - happy to chat.
    </>
  );

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
      <h1>Joe Vaughan</h1>
      <p className="intro">
        Marketer, writer, tinkerer. Wearer of many hats. I take niche topics and
        make content showing why they are <i>the</i> most important thing in the
        entire world.
      </p>
      <nav className="menu">
        <Button
          onClickAction={setText}
          setActive={setActive}
          target={career.body}
          caption="Career"
          index={1}
          isActive={active === 1}
        />
        <Button
          onClickAction={setText}
          setActive={setActive}
          target={contact}
          caption="Contact"
          index={2}
          isActive={active === 2}
        />
        <Button
          onClickAction={setText}
          setActive={setActive}
          target={website}
          caption="Website"
          index={3}
          isActive={active === 3}
        />
      </nav>
      {
        // Hide on mount
        text != "" && <p className="highlight-text">{text}</p>
      }
    </div>
  );
}

export default App;
