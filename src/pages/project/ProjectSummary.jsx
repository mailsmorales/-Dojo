import React from "react";
import Avatar from "../../components/avatar/Avatar";
import { dueDate } from "../../helpers/date";

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Срок выполнения:{" "}
          {dueDate(project.dueDate.toDate())}
        </p>
        <p className="details">{project.details}</p>
        <h4>Проект назначен:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;