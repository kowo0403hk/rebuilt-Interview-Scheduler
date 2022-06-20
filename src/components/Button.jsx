import React from "react";
import "components/Button.scss";
import classNames from "classnames";

export default function Button({
  confirm,
  danger,
  disabled,
  onClick,
  children,
}) {
  // {confirm/danger, disabled, onClick}
  const buttonClass = classNames("button", {
    "button--confirm": confirm,
    "button--danger": danger,
  });

  return (
    <>
      <button onClick={onClick} className={buttonClass} disabled={disabled}>
        {children}
      </button>
    </>
  );
}
