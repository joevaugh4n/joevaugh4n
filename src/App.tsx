import "./app.css";
import Joe from "/joe-portrait.jpg";

function App() {
  return (
    <div className="container">
      <header>
        <img src={Joe} className="heroImage" alt="Joe Vaughan" />
      </header>
      <p>
        <h1 className="title">
          <b>Joe Vaughan</b>
        </h1>{" "}
        is a comedian, creative, and writer based in London.
      </p>
      <p>
        He works as a content creator at The Museum of English Rural Life,
        University of Reading, where he runs{" "}
        <a href="https://bsky.app/profile/themerl.bsky.social">
          their social media
        </a>{" "}
        and hosts{" "}
        <a href="https://merl.reading.ac.uk/explore/absolute-units/">
          their podcast
        </a>
        .
      </p>
      <p>
        He is really glad you visited this website to learn more and he is
        slightly embarassed about the state of the place.
      </p>
      <p>
        If you would like to pull up a chair you can find a wide selection of
        them{" "}
        <a
          href="https://www.google.com/search?sca_esv=651164c6481fa95a&rlz=1C5MACD_enGB1106GB1106&sxsrf=ANbL-n5lQg7m6QCdAMzbjhJYeIyS_bpCzw:1768735020801&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3o6iwGk6Iv1tRbZIBNIVs-5CylPOvMibOiu5QsvYkQPVaca9NoFh0i-99KVMPoRW1_5ZGfygFvQOnyogqV993ox9ylLTTUwfmG_761AL3HjRoY4R4gkx14P0EQw44J08x72_vJPNJTxIj_YH0LfNjVyAbaMGGf4m6a7QgfWOUBXcmUuFjA&q=chair&sa=X&ved=2ahUKEwj8kfe0-5SSAxVfQUEAHaD_A_AQtKgLegQIExAB&biw=1890&bih=955&dpr=1.6&aic=0"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p>
        There isn't much you can do on this website but there is a textbox that
        you can enter a secret into and you can just get it out of your system.
      </p>
      <p>
        Confession: I don't know <i>how</i> to make textboxes that save
        responses.
      </p>
      <p>
        Even if I did know I would keep the secret textbox as it is because I
        believe many people say they find the textbox useful, cathartic, and a
        form of light relief that's difficult to get in today's busy, highly
        public urban life or the modern internet.
      </p>
      <p>
        The textbox is free to use and you can use it as much or as little as
        you like.
      </p>
      <form className="secretTextbox">
        <input></input>
      </form>
      <p>
        Joe Vaughan is grateful to everyone who has been a part of this journey
        so far. If you are reading this you have joined a cohort of dedicated
        users who progressed as far as the Second Act. This is not for nothing
        and some achievement in some worlds. It would be virtually impossible
        for a spider (for example) to open even the first page, let alone to
        this later paragraph. Or to understand it.
      </p>
      <p>
        Second confession: I use no analytics on this website so I have no idea
        of the number of people who are using it. But I have very good reason to
        believe that the number is very high. Possibly into the tens of
        trillions. It is good to have dreams and even better to have no
        analytics.
      </p>
      <p>
        If you would like to give Joe feedback on the secret textbox here is
        another textbox that you can use. This textbox uses the same mechanism
        as the secret textbox, meaning your suggestions will stay private. The
        designer's intent is that this gives you the confidence to express your
        feedback with the force and candour that you would expect a textbox like
        this one to receive. It is your textbox. It is a textbox that wants you
        to succeed.
      </p>
      <form className="secretTextbox">
        <input></input>
      </form>
      <p>
        Joe is always open to the idea of creating more textboxes for your use
        and believes in the importance of user-led design. Please let Joe know
        what you think via either of the previous textboxes. You can also write
        him a letter.
      </p>
      <p>
        Follow Joe on{" "}
        <a href="https://www.instagram.com/joevaughanleaks">Instagram</a> or{" "}
        <a href="https://bsky.app/profile/joevaughan.net">Bluesky</a>. If you
        are here on business you can also follow Joe on{" "}
        <a href="https://www.linkedin.com/in/joevaugh4n/">LinkedIn</a>.
      </p>
      <div className="info">
        <h2>Guide to using this website</h2>: Think of{" "}
        <a href="/">joevaughan.net</a> like walking your dog in the park. Please
        clean up after yourself or your four-legged friend and don't let your
        dog off the leash especially when there are birds around. There
        shouldn't be any birds but you never know as they have the gift of
        flight. If you see any birds please let Joe know via either of the
        feedback mechanisms.{" "}
      </div>
    </div>
  );
}

export default App;
