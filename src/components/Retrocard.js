const RestroCard = (props) => {
  //destructing
  const { name, rating, cuisine, image, cft } = props?.restroData.info;
  const cuisineData = cuisine.map((cuisineValue) => cuisineValue.name);
  console.log(cuisineData);
  return (
    <div className="restrocard">
      <img srcSet={image.url} alt="" />
      <h3>{name}</h3>
      <h4>{cuisineData.join(", ")}</h4>
      <h5>{rating.aggregate_rating + " stars"}</h5>
      <h6>{cft.text}</h6>
    </div>
  );
};

export default RestroCard;
