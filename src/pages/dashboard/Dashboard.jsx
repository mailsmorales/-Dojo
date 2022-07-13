import React from "react";
import Projects from "../../components/projects/Projects";
import { useGetCollection } from "../../hooks/useCollection";
import "./styles.css";

const Dashboard = () => {
  const { documents, error } = useGetCollection("projects");
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error} </p>}
      {documents && <Projects projects={documents} />}
    </div>
  );
};

export default Dashboard;
