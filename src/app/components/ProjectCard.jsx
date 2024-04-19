import React from "react";

const ProjectCard = ({ imgUrl, title, desctiption }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="text-white">
        <h5>{title}</h5>
        <p>{desctiption}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
