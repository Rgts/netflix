const Section = (props) => {
  return (
    <>
      <h2>{props.category}</h2>
      <div className="flex-container">
        {props.images.map((url, index) => {
          return <img key={index} className="flex-item" src={url} alt="film" />;
        })}
      </div>
    </>
  );
};

export default Section;
