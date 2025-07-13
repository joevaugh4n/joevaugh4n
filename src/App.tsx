import "./app.css";
import Bluesky from "/bluesky.svg";
import LinkedIn from "/linkedin.svg";
import YouTube from "/youtube.png";
import Joe from "/joe.jpg";

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

interface ShowProps {
  title: string;
  date: string;
  location: string;
}

function Show({ title, date, location }: ShowProps) {
  return (
    <li className="show">
      <span className="title">{title}</span>{" "}
      <span className="location">{`(${location})`}</span> {date && "- "}{" "}
      <span className="date">{date}</span>
    </li>
  );
}

function App() {
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
        <SocialIcon
          title="YouTube"
          icon={YouTube}
          url="https://www.youtube.com/@joevaughanleaks"
        />
      </nav>
      <header className="title">
        <h1>Joe Vaughan</h1>
        <p>
          Content at The Museum of English Rural Life. Host of{" "}
          <a href="https://merl.reading.ac.uk/explore/absolute-units/">
            Absolute Units
          </a>
          . Comedian.
        </p>
        <p>
          <a href="mailto:jbvaughan1993@gmail.com">Contact</a>.
        </p>
      </header>

      <img
        src={Joe}
        className="portrait"
        alt="Joe Vaughan standing on a stage, speaking to an audience."
      />

      <hgroup className="shows">
        <h2>Shows</h2>
        <ul>
          <Show
            title="Ginger Giggle Club"
            location="Grays, Essex"
            date="19 July 2025"
          />
          <Show title="Healing Comedy" location="Ealing" date="27 July 2025" />
          <Show
            title="Comedy Bandits"
            location="Clapham"
            date="19 September 2025"
          />
        </ul>
      </hgroup>
    </div>
  );
}

export default App;
