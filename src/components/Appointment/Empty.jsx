import React from "react";

export default function Empty({ onClick }) {
  return (
    <main className="appointment__add">
      <img
        onClick={onClick}
        src="./images/add.png"
        alt="Add"
        className="appointment__add-button"
      />
    </main>
  );
}
