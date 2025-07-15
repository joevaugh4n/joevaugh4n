import "./app.css";
import Bluesky from "/bluesky.svg";
import LinkedIn from "/linkedin.svg";
import YouTube from "/youtube.png";
import { ShowList, Show } from "./ShowList";

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
          . Comedian. <a href="mailto:jbvaughan1993@gmail.com">Contact</a>.
        </p>
      </header>

      <hgroup className="shows">
        <h2>Shows</h2>
        <ul>
          {ShowList.slice()
            .sort((a, b) => a.date.getTime() - b.date.getTime())
            .map((show) => (
              <Show
                title={show.title}
                location={show.location}
                date={show.date}
              />
            ))}
        </ul>
      </hgroup>
    </div>
  );
}

export default App;
