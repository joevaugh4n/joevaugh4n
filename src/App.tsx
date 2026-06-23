import Joe from "/joe-portrait.jpg";
import About from "./About";
import Hero from "./Hero";
import Header from "./Header";
import "./index.css";

function App() {
  return (
    <div className="bg-amber-100 w-screen h-screen ">
      <div className="md:mx-auto mx-8 sm:max-w-[80ch] py-4 flex flex-col font-serif">
        <Hero image={Joe} />
        <Header />
        <About />
      </div>
    </div>
  );
}

export default App;
