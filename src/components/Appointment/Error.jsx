import React from "react";

export default function Error({ children, onClose }) {
  // {message, onClose}

  return (
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text-semi-bold">Error</h1>
        <h3 className="text-light">{children}</h3>
      </section>
      <img
        src="./images/close.png"
        alt="Close"
        className="appointment__error-close"
        onClick={onClose}
      />
    </main>
  );
}
