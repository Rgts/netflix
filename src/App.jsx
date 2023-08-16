import "./App.css";
import Section from "./components/Section";
import data from "./data/data.json";

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
        {/* <Section category="Reprendre avec" />
        <Section category="Comédies" />
        <Section category="Dessins animés" /> */}

        {data.map((element, index) => {
          return (
            <Section
              key={index}
              category={element.category}
              images={element.images}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
