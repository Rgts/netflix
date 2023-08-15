import data from "../data/data.json";

const Section = (props) => {
  return (
    <>
      <h2>{props.category}</h2>
      <div className="flex-container">
        {data
          // renvoie un tableau correspondant à la catégorie cherchée
          .filter((element) => element.category === "Comédies") // si je remplace "Comédies" par {props.category} ca ne marche pas
          // récup le 1 élément du tableau
          .shift()
          // construit un nveau tableau avec du jsx
          .images.map((url, index) => {
            return (
              <img key={index} className="flex-item" src={url} alt="film" />
            );
          })}
      </div>
    </>
  );
};

export default Section;
