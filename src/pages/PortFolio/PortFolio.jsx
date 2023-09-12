import React from "react";
import "./PortFolio.css";
import { projects } from "../../Data";


const PortFolio = () => {
  return (
    <>
      <section>
        <div className="container text-center common-title fw-bold">
          <h2 className="common-heading ">Creative Showcases</h2>
          <hr className="w-25 mx-auto " />
        </div>

        <div className="project-section">
          <h2>Project Showcases</h2>

          {projects.map((project) => (
            <div className="mb-3 main-card" key={project.projectNumber}>
              <h2>project : {project.projectNumber}</h2>
              <h4>{project.projectName}</h4>
              <img
                src={project.imageSrc}
                className="card-img-top"
                alt="card-image"
              />
              <div className="card-body">
                <h3 className="card-title">Website Name : {project.projectName}</h3>
                <p className="card-text">{project.description}</p>
                <p className="card-text">
                  <small className="text">Last updated {project.lastUpdated}</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortFolio;
