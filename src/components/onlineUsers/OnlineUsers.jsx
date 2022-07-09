import React from "react";
import { useGetCollection } from "../../hooks/useCollection";
import Avatar from "../avatar/Avatar";
import "./style.css";

const OnlineUsers = () => {
  const { error, documents } = useGetCollection();
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{{ error }}</div>}
      {documents &&
        documents.map((user) => {
          return (
            <div key={user.id}>
              <span>{user.displayName}</span>
              <Avatar src={user.photoURL} />
            </div>
          );
        })}
    </div>
  );
};

export default OnlineUsers;
