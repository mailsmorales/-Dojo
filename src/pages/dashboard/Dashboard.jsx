import React, { useState } from "react";
import Projects from "../../components/projects/Projects";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useGetCollection } from "../../hooks/useCollection";
import { ProjectFilter } from "./ProjectFilter";
import "./styles.css";

const Dashboard = () => {
  const { user } = useAuthContext();
  const { documents, error } = useGetCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects =
    documents &&
    documents.filter((project) => {
      switch (currentFilter) {
        case "all": return true
        case "mine": return project.assignedUsersList.some((assignedUser) => assignedUser.id === user.uid);
        case "development":
        case "design":
        case "sales":
        case "marketing":
          return project.category === currentFilter;
        default:
          return true;
      }
    });

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error} </p>}
      {documents && (
        <ProjectFilter
          handleClick={changeFilter}
          currentFilter={currentFilter}
        />
      )}
      {projects && <Projects projects={projects} />}
    </div>
  );
};

export default Dashboard;
