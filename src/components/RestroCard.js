import { IMG_URL } from "../utils/constants";

const RestroCard = (props) => {
  //destructing
  const { name, avgRating, cuisines, cloudinaryImageId, sla } = props?.restroData;
  const cuisineData = cuisines.map((cuisineValue) => cuisineValue);
  return (
    <div className="restrocard">
      <img srcSet={IMG_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisineData.join(", ")}</h4>
      <h5>{avgRating + " stars"}</h5>
      <h6>{sla.slaString}</h6>
    </div>
  );
};

export default RestroCard;
