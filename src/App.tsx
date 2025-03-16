import "./app.css";
import { useState } from "react";
import Bluesky from "/bluesky.svg";

interface ButtonProps {
  onClickAction: (arg: React.ReactNode) => void;
  target: React.ReactNode;
  caption: string;
  colour: string;
}

function Button({ onClickAction, target, caption, colour }: ButtonProps) {
  return (
    <button
      onClick={() => onClickAction(target)}
      className={`menu-item ${colour} ${target ? "" : "active"}`}
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
        most popular tools for app development. Before that, I was a copywriter
        for a bunch of brands that you probably think about every day.
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
      </nav>
      <h1>Joe Vaughan</h1>
      <p className="intro">
        Marketer, writer, tinkerer. Wearer of many hats. I take niche topics and
        make content showing why they are the most important thing in the entire
        world.
      </p>
      <nav className="menu">
        <Button
          onClickAction={setText}
          target={career.body}
          colour="vanilla"
          caption="Career"
        />
        <Button
          onClickAction={setText}
          target={contact}
          colour="orange"
          caption="Contact"
        />
        <Button
          onClickAction={setText}
          target={website}
          caption="Website"
          colour="blue"
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
