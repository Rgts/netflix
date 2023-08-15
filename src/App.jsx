import "./App.css";
import Section from "./components/Section";
import data from "./data/data.json";

const imsrc =
  "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1580312879/react-new-exercices/Netflix/Emissions%20TV/abstract_hlzhev.jpg"; // console.log(data[0]);
function App() {
  return (
    <>
      <div className="container">
        <header>
          <img
            className="logo"
            src="https://lereacteur-react-netflix.netlify.app/static/media/logo.696c2101.png"
            alt="logo-netflix"
          />
        </header>
        <Section category="A reprendre" />

        {/* <Section category="Emissions TV" />
        <Section category="Comédies" /> */}
      </div>
    </>
  );
}

export default App;
