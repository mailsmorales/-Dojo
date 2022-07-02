import React, { useState } from "react";
import "./styles.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState("null");

  const handleChangeFile = (event) => {
    const selected = event.target.files[0];

    console.log(selected);

    if (!selected) return setThumbnailError("Пожалуйста, выберите файл");
    if (selected.type !== "image") return setThumbnailError("Пожалуйста, выберите валидную картинку")
    if (selected.seze >= 1000000) return setThumbnailError("Пожалуйста, выберите файл размером меньше 100кб")


    setThumbnail(selected)
    setThumbnailError(null)
  };

  return (
    <form className="auth-form">
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Profile thumbnail:</span>
        <input required type="file" onChange={handleChangeFile} />
        {thumbnailError && <span className="error">{thumbnailError}</span>}
      </label>
      <button className="btn">Sign up</button>
    </form>
  );
};

export default Signup;
