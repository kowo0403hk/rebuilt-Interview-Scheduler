import React from "react";
import PropTypes from "prop-types";

function Error(props) {
  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text-semi-bold">Error</h1>
        <h3 className="text-light">{props.children}</h3>
      </section>
      <img
        src="./images/close.png"
        alt="Close"
        className="appointment__error-close"
        onClick={props.onClose}
      />
    </main>
  );
}

Error.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Error;
