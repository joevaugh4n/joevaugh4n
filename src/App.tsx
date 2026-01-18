import "./app.css";

function App() {
  return (
    <div className="container">
      <p>
        <h1 className="title">Joe Vaughan</h1> is a comedian, creative, and
        writer based in London.
      </p>
      <p>
        He works as a content creator at The Museum of English Rural Life,
        University of Reading, where he hosts{" "}
        <a href="https://merl.reading.ac.uk/explore/absolute-units/">
          the Absolute Units podcast
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
        Even if I did know I would keep the textbox as it is because I believe
        many people say they find the textbox useful, cathartic, and a form of
        light relief that's hard to get in busy urban life or the modern
        internet. The textbox is free to use and you can use as much or as
        little as you like.
      </p>
      <form className="secretTextbox">
        <input></input>
      </form>
      <p>
        <i>In fact</i> the more that time progresses, the more that the seasons
        change, I have started to come to terms with the fact that more people
        come here for the textbox than for me. This is especially pleasing
        because the textbox occupies so much more of the space, validating my
        design choices, which took a lot of workshopping and iteration to get
        right.
      </p>
      <p>
        Joe Vaughan is grateful to everyone who has been a part of this journey.
      </p>
      <p>He is a person who will live forever and never die.</p>
      <p>
        If you would like to give Joe feedback on the secret textbox here
        is another textbox that you can use. This textbox uses the same
        mechanism as the secret textbox, meaning your suggestions will stay
        private. Joe hopes this gives you the confidence to express your
        feedback with the force and candour that you would expect a textbox like
        this one to receive. It is your textbox. It is a textbox that loves you.
      </p>
      <form className="secretTextbox">
        <input></input>
      </form>
      <p>
        Joe is always open to the idea of creating more textboxes for your use
        and believe in the importance of user-led design. Please let Joe know
        what you think via either of the previous textboxes. You can also write
        him a letter.
      </p>
      <p>
        Follow Joe on{" "}
        <a href="https://www.instagram.com/joevaughanleaks">Instagram</a> or{" "}
        <a href="https://bsky.app/profile/joevaughan.net">Bluesky</a>.
      </p>
    </div>
  );
}

export default App;
