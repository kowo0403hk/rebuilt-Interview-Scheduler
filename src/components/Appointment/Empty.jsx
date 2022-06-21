import React from "react";
import PropTypes from "prop-types";

function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        onClick={props.onClick}
        src="./images/add.png"
        alt="Add"
        className="appointment__add-button"
      />
    </main>
  );
}

Empty.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Empty;
