import About from "./About";
import Footer from "./Footer";
import "./index.css";

/** Thank you for checking out the source code I hope you have a lovely day */
function App() {
  return (
    <div className="bg-amber-100 w-screen min-h-screen">
      <div className="md:mx-auto mx-8 sm:max-w-[80ch] flex flex-col font-sans">
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
