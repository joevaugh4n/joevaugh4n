import "./app.css";

function App() {
  return (
    <div className="container">
      <p>
        <h1 className="title">Joe Vaughan</h1> is a comedian and creative based
        in London.
      </p>
      <p>He works at The Museum of English Rural Life, Reading.</p>
      <p>
        He is really glad you visited this website to learn more and slightly
        embarassed about the state of the place.
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
        I don't know <i>how</i> to make textboxes that save responses.
      </p>
      <p>
        {" "}
        Even if I did know I would keep this as it is because I believe many
        people have said they find the textbox to be useful, cathartic, and a
        form of light relief that is hard to get in busy urban life or the
        modern internet. It is free to use and you can use as much or as little
        as you like.
      </p>
      <form className="secretTextbox">
        <input></input>
      </form>
      <p>
        If you would like to give me more feedback on the secret textbox here is
        another textbox that you can use.
      </p>
      <form className="secretTextbox">
        <input></input>
      </form>
      <p>
        Follow Joe on{" "}
        <a href="https://www.instagram.com/joevaughanleaks">Instagram</a> or{" "}
        <a href="https://bsky.app/profile/joevaughan.net">Bluesky</a>.
      </p>
    </div>
  );
}

export default App;
