import RestroCard  from "./Retrocard";
import restroObj from "./../utils/mockData.js";
import { useState } from "react";

const Body = () => {
    const [listOfRetros, setListOfRetros]= useState(restroObj);
  return (
    <div className="body">
      <div className="search"></div>
      <div className="filter-btn">
        <button className="filter" onClick={() => {
            const filteredList = listOfRetros.filter((restro) => restro?.info?.rating?.aggregate_rating > 4.1
        );
            setListOfRetros(filteredList);
        }}>Filter by Top Rating</button>
      </div>
      <div className="restrocontainer">
        {listOfRetros.map((restaurent) => (
          <RestroCard key={restaurent.id} restroData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
