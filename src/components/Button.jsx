import React from "react";
import PropTypes from "prop-types";
import "components/Button.scss";
import classNames from "classnames";

function Button(props) {
  // {confirm/danger, disabled, onClick}
  const buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
  });

  return (
    <>
      <button
        onClick={props.onClick}
        className={buttonClass}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
}

Button.propTypes = {
  confirm: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
