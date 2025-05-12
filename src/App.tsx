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
  const Career = {
    title: "Career",
    body: (
      <>
        <p>
          I always wanted a writing job. When I was a student I founded and
          edited a successful international poetry zine and learned to promote
          it with social media. I also did socials for my friends' forays into
          student politics.
        </p>
        <p>
          In 2016, fresh from a Creative Writing MA and a year's stint writing
          letters for a wonderfully eccentric Grantham legal office, I joined a
          marketing agency in Leeds and wrote copy for brands that almost
          inevitably pop up in your algorithm and high streets. People thought I
          was funny and had a Good Turn Of Phrase, so I ended up doing more and
          more on social media.
        </p>
        <p>
          Museum jobs are notoriously few and far between. I never imagined a
          career pathway to working in the arts. But in 2019, an opportunity
          arose for me to apply to become the social media lead and digital
          content editor for The Museum of English Rural Life and Reading Museum
          (Museums Partnership Reading).
        </p>

        <p>
          I was a huge fan of The MERL socials, admiring its creativity and its
          clear inspiration by werid US brands on Twitter. To this day my
          favourite brand social media acount is MoonPie. So I applied, got the
          job, moved down to Reading, and the rest is history.
        </p>
        <p>
          My work for Reading's museums generated tens of millions of
          impressions, viral campaigns, and earned media attention from places
          like Polygon, The Guardian, NPR, BBC Radio, and more. I also led both
          museums' digital content plans throughout COVID, which was very tough
          but very rewarding.
        </p>
        <p>
          In 2023, after completing the COVID mission, I needed a change of
          scene and joined a US-based tech company for just over a year. I was a
          fully-remote social media manager. This was extremely informative, and
          I met some of the smartest, kindest people I have ever worked with. I
          also learned how to be a web developer.
        </p>
        <p>
          In 2024 the opportunity arose to rejoin The MERL as their Marketing
          Manager, replacing my brilliant former boss Alison Hilton. So I took
          it. Today, I lead on brand, marketing, socials, and produce and
          co-host the museum's podcast, Absolute Units.
        </p>
        <p>
          If you ever want to chat about my career or your career, please don't
          hesitate to reach out. I am very happy to talk about it and share
          advice.
        </p>
      </>
    ),
  };

  const [text, setText] = useState<React.ReactNode>(Career.body);
  const [active, setActive] = useState(0);

  const Contact = (
    <>
      The best place is probably{" "}
      <a href="https://www.linkedin.com/in/joevaugh4n/">LinkedIn</a>.
    </>
  );

  const Website = (
    <>
      <p>
        I love coding. I built this site using
        JavaScript.
      </p>
      <p>
        I find web development extremely satisfying and have made a few websites
        as freelance projects for my friends, including{" "}
        <a href="https://adamkoszary.co.uk/">Adam Koszary</a> and{" "}
        <a href="https://happypandareading.co.uk/">Happy Panda Reading</a>.
      </p>
      <p>If you ever need web help, reach out - happy to chat.</p>
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
        I take niche topics and show why they are <i>the</i> most important
        thing in the entire world.
      </p>
      <nav className="menu">
        <Button
          onClickAction={setText}
          setActive={setActive}
          target={Career.body}
          caption="Career (bio)"
          index={1}
          isActive={active === 1}
        />
        <Button
          onClickAction={setText}
          setActive={setActive}
          target={Contact}
          caption="Contact"
          index={2}
          isActive={active === 2}
        />
        <Button
          onClickAction={setText}
          setActive={setActive}
          target={Website}
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
