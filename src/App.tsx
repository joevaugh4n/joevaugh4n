import "./app.css";
import Bluesky from "/bluesky.svg";
import LinkedIn from "/linkedin.svg";
import Joe from "/joe.jpg"

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
      <header className='title'>
        <h1>Joe Vaughan</h1>
        <p>Content lead at The Museum of English Rural Life. Comedian. <a href='mailto:jbvaughan1993@gmail.com'>Contact</a>.</p>
      </header>

      <img src={Joe} className='portrait' />

    </div>
  );
}

export default App;
