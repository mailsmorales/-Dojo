import React, { useEffect } from "react";
import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router-dom";
import "./styles.css";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";

const Project = () => {
  const params = useParams();
  const { document, error } = useDocument("projects", params.id);

  useEffect(() => {
    console.log(document);
  }, [document])

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document && !error) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
};

export default Project;
