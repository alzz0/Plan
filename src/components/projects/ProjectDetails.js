import React from "react";

const projectDetails = props => {
  let id = props.match.params.id;
  console.log(id);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>blah blah blah </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div className="">Posted by Ali</div>
          <div className="">November 24th</div>
        </div>
      </div>
    </div>
  );
};

export default projectDetails;
