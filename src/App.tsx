import "./app.css";
import { useState } from "react";
import Bluesky from "/bluesky.svg";

interface ButtonProps {
  onClickAction: (arg: React.ReactNode) => void;
  target: React.ReactNode;
  caption: string;
}

function Button({ onClickAction, target, caption }: ButtonProps) {
  return (
    <button
      onClick={() => onClickAction(target)}
      className={`menu-item ${target ? "" : "active"}`}
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
  const career = (
    <>
      Currently, I'm the marketing lead at Museum of English Rural Life. I
      previously worked at MERL and Reading Museum from 2019-2023. From
      2023-2024 I was the first marketing hire at Storybook, one of the world's
      biggest apps for web development. Before that, I was a copywriter for a
      bunch of brands that you probably think about every day.
    </>
  );

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
      <p>
        Hey. I'm a marketer, writer, tinkerer, and wearer of many hats. I take
        niche topics and make content showing why they're the most important
        thing in the entire world.
      </p>
      <nav className="menu">
        <Button onClickAction={setText} target={career} caption="Career" />
        <Button onClickAction={setText} target={contact} caption="Contact" />
        <Button onClickAction={setText} target={website} caption="Website" />
      </nav>
      {
        // Hide on mount
        text != "" && <p className="highlight-text">{text}</p>
      }
    </div>
  );
}

export default App;
