import React from 'react';

export default function Empty(props) {
  return (
    <main className="appointment_add">
      <img onClick={props.onAdd} src="./images/add.png" alt="Add" className="appointment__add-button" />
    </main>
  );
}