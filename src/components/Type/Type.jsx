import React, { useState } from "react";
import s from "./Type.module.css";
import TypeDataForm from "./TypeDataForm";

const Type = (props) => {
  let [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    //console.log(formData);
    props.insertType(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={s.descriptionBlock}>
      {editMode ? (
        <TypeDataForm
          onSubmit={onSubmit}
          // initialValues={props.type}
          // type={props.type}
        />
      ) : (
        <TypeData
          type={props.type}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};

const TypeData = ({ type, goToEditMode }) => {
  return (
    <div>
      <div>
        <button onClick={goToEditMode}>edit</button>
      </div>

      <div> Название типа </div>
      <div>
        {type.map((u) => (
          <div>
            <b>{u.id}</b>: {u.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
