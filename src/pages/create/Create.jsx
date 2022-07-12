import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useGetCollection } from "../../hooks/useCollection";
import "./styles.css";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const Create = () => {
  const { documents, error } = useGetCollection("users"); // все пользователи из системы 
  const [users, setUsers] = useState([]); // пользователи преобразованные  а [{value, label}]
  const [name, setName] = useState(""); // имя проекта
  const [details, setDetails] = useState(""); // ДЕТАЛИ ПРОЕКТА
  const [dueDate, setDueDate] = useState(""); // дата завершения проекта
  const [category, setCategory] = useState(""); // категория проекта
  const [assignedUsers, setAssignedUsers] = useState([]); // исполнители проекта
  const [formError, setFormError] = useState(""); // Ошибка в форме

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!category) {
      setFormError("Please, select a project category!");
      return;
    }
    if (!assignedUsers.length) {
      setFormError("Please, assign the  project to at laset 1 user ");
      return;
    }

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const createdBy = {}

    const project = {
      name,
      details,
      category: category.value,
      dueDate: new Date(dueDate),
      assignedUsersList,
      createdBy,
      comments: []
    };
  };

  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project details:</span>
          <textarea
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        <label>
          <span>Project category:</span>
          <Select
            onChange={(option) => setCategory(option)}
            options={categories}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>
        {formError && <div className="error">{formError}</div>}
        <button className="btn">Add Project</button>
      </form>
    </div>
  );
};

export default Create;
