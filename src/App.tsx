import "./app.css";
import Joe from "/joe-portrait.jpg";

function App() {
  return (
    <div className="container">
      <header>
        <img src={Joe} className="heroImage" alt="Joe Vaughan" />
      </header>
      <p>
        I'm&nbsp;
        <span>
          <h1 className="title">Joe Vaughan</h1>,
        </span>{" "}
        a writer, social media creator, and marketer based in west London.
      </p>
      <p>
        I work as the Marketing Manager at the University of Reading's Museums
        and Collections, where I run &nbsp;
        <a href="https://bsky.app/profile/themerl.bsky.social">social media</a>
        &nbsp;at The Museum of English Rural Life and host/produce&nbsp;
        <a href="https://merl.reading.ac.uk/explore/absolute-units/">
          the Absolute Units podcast
        </a>
        .
      </p>
      <p>
        I've done lots of talks and press about social media, and there are a
        bunch of places where you can read more about what I do.
      </p>
      <ul>
        <li>
          <a href="https://www.theguardian.com/books/2019/oct/22/woman-reunited-with-childhood-book-in-museum-reading-the-secret-garden">
            The Guardian
          </a>
        </li>
        <li>
          <a href="https://www.polygon.com/2020/3/26/21195434/animal-crossing-new-horizons-merl-rural-life-museum-smocks-design-clothes/">
            Polygon
          </a>
        </li>
        <li>
          <a href="https://www.museumsassociation.org/museums-journal/in-practice/2024/11/guide-how-museums-can-thrive-with-a-little-bluesky-thinking/">
            Museums Journal
          </a>
        </li>
        <li>
          <a href="https://www.npr.org/2020/08/09/900498227/the-escapist-land-of-cottagecore-from-marie-antoinette-to-taylor-swift">
            NPR
          </a>
        </li>
      </ul>
      <p>
        The best place to contact me is{" "}
        <a href="https://www.linkedin.com/in/joevaugh4n/">LinkedIn</a>.
      </p>
    </div>
  );
}

export default App;
