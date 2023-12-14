import React from "react";
import { createField } from "../Commen/FormControls/FormControls";
import { reduxForm, Field } from "redux-form";

import { Input } from "../Commen/FormControls/FormControls";
const TypeEditForm = ({ handleSubmit, id }) => {
  // typeOne={typeOne}
  //           name={typeOne.name}
  //           id={typeOne.id}
  //           onSubmit={onSubmit}
  //           goToInsertMode=
  return (
    <form onSubmit={handleSubmit}>
      <div>Type new</div>
      <div>
        <button onClick={() => {}}>save</button>
      </div>

      <div>
        <b>name</b>:{createField("name", "name", [], Input)}
        <b>id</b>:{createField("id", "id", [], Input)}
      </div>
    </form>
  );
};

const TypeEditFormReduxForm = reduxForm({ form: "edittype" })(TypeEditForm);
export default TypeEditFormReduxForm;
