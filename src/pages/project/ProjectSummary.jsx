import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";
import { dueDate } from "../../helpers/date";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

const ProjectSummary = ({ project }) => {
  const { user } = useAuthContext();
  const { deleteDocument } = useCollection("projects");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteDoc = async () => {
    setIsLoading(true);
    await deleteDocument(project.id);
    setIsLoading(false);
    navigate("/");
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Срок выполнения: {dueDate(project.dueDate.toDate())}
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
      {user.uid === project.createdBy.id && (
        <button onClick={handleDeleteDoc} className="btn">
          {!isLoading ? "Mark as Complete" : "isLoading"}
        </button>
      )}
    </div>
  );
};

export default ProjectSummary;
