import "./App.css";
import Aboutme from "./Layout/Aboutme";
import Contact from "./Layout/Contact";
import Portofolio from "./Layout/Portofolio";
import Navigation from "./UI/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <div>
        <Aboutme />
      </div>
      <Portofolio />
      <Contact />
    </>
  );
}

export default App;
