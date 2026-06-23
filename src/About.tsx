import Link from "./Link";

export default function About() {
  return (
    <div className="flex flex-col gap-2">
      <p>
        Joe works as the Marketing Manager at the University of Reading's
        Museums and Collections, where he runs&nbsp;
        <Link
          target="https://bsky.app/profile/themerl.bsky.social"
          title="social media"
        />
        &nbsp;at The Museum of English Rural Life and hosts/produces&nbsp;
        <Link
          target="https://merl.reading.ac.uk/explore/absolute-units/"
          title="the Absolute Units podcast"
        />
        .
      </p>
      <p>
        Joe has done many talks and interviews about the opportunities of social
        media for heritage and third-sector organisations, including:
      </p>
      <ul className="list-disc px-4">
        <li>
          <Link
            title="The Guardian"
            target="https://www.theguardian.com/books/2019/oct/22/woman-reunited-with-childhood-book-in-museum-reading-the-secret-garden"
          />
        </li>
        <li>
          <Link
            title="Polygon"
            target="https://www.polygon.com/2020/3/26/21195434/animal-crossing-new-horizons-merl-rural-life-museum-smocks-design-clothes/"
          />
        </li>
        <li>
          <Link
            title="Museums Journal"
            target="https://www.museumsassociation.org/museums-journal/in-practice/2024/11/guide-how-museums-can-thrive-with-a-little-bluesky-thinking/"
          />
        </li>
        <li>
          <Link
            title="NPR"
            target="https://www.npr.org/2020/08/09/900498227/the-escapist-land-of-cottagecore-from-marie-antoinette-to-taylor-swift"
          />
        </li>
      </ul>

      <p>
        The best place to contact Joe is{" "}
        <Link
          target="https://www.linkedin.com/in/joevaugh4n/"
          title="LinkedIn"
        />
        .
      </p>
    </div>
  );
}
