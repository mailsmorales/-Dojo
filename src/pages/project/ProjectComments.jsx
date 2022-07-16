import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { v4 as uuid4 } from "uuid";
import Avatar from '../../components/avatar/Avatar'

const ProjectComments = ({ project }) => {
  const { user } = useAuthContext();
  const { updateDocument, response } = useCollection("projects");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const commentToAdd = {
      displayName: user.displayName, // Имя Автора
      photoURL: user.photoURL, // Фотка Автора
      content: newComment, // Сам комментарий
      createdAt: Timestamp.fromDate(new Date()),
      id: uuid4(),
    };

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd],
    });

    if (response.error) {
      setNewComment("");
    }
  };
  return (
    <div className="project-comments">
      <h4>Комментарии к проекту</h4>
      <ul>
        {project.comments.lenght> 0 &&
          project.comments.map((comment) => (
            <li key={comment.id}>
              <div className="comment-author">
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className="comment-date">
                <p>Comment Date</p>
              </div>
              <div className="comment-content">
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>
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
