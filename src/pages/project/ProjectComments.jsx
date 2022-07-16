import { serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const ProjectComments = () => {
  const { user } = useAuthContext();
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    const commentToAdd = {
      displayName: user.displayName, // Имя Автора
      photoURL: user.photoURL, // Фотка Автора
      content: newComment, // Сам комментарий
      createdAt: serverTimestamp(),
      id: Math.random(),
    };
  };
  return (
    <div className="project-comments">
      <h4>Комментарии к проекту</h4>

      <form className="add-comment" onSubmit={handleSubmit}>
        <label>
          <span>Описание:</span>
          <textarea
            required
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          ></textarea>
        </label>
        <button className="btn">Добавить комментарий</button>
      </form>
    </div>
  );
};

export default ProjectComments;
