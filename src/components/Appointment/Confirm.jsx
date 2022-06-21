import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";

function Confirm(props) {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.children}</h1>
      <section className="appointment__actions">
        <Button onClick={props.onCancel} danger>
          Cancel
        </Button>
        <Button onClick={() => props.onDelete(props.id)} danger>
          Confirm
        </Button>
      </section>
    </main>
  );
}

Confirm.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Confirm;
