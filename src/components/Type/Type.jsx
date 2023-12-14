import React, { useState } from "react";
import s from "./Type.module.css";
import TypeDataForm from "./TypeDataForm";
import TypeData from "./TypeData";

const Type = (props) => {
  let [insertMode, setInsertMode] = useState(false);

  const onSubmit = (formData) => {
    console.log(formData);
    props.insertType(formData).then(() => {
      setInsertMode(false);
    });

    // props.updateType(formData).then(() => {
    //   setEditMode(false);

    // });
  };

  return (
    <div className={s.descriptionBlock}>
      {insertMode ? (
        <TypeDataForm onSubmit={onSubmit} />
      ) : (
        <TypeData
          type={props.type}
          updateType={props.updateType}
          goToInsertMode={() => {
            setInsertMode(true);
          }}
        />
      )}
    </div>
  );
};

export default Type;
