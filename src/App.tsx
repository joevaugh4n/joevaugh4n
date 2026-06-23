import Joe from "/joe-portrait.jpg";
import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Header from "./Header";
import "./index.css";

/** Thank you for checking out the source code I hope you have a lovely day */
function App() {
  return (
    <div className="bg-amber-100 w-screen min-h-screen">
      <div className="md:mx-auto mx-8 sm:max-w-[80ch] flex flex-col font-sans">
        <Hero image={Joe} />
        <Header title="Joe Vaughan" subheading="Marketing, socials, persona" />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
