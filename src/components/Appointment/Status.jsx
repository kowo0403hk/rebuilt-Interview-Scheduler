import React from 'react';

export default function Status(props) {
  // {message}
  return (
    <main className="appointment__card appointment__card--status">
      <img src="./images/status.png" alt="Loading" className="appointment__status-image" />
      <h1 className="text--semi-bold">{props.message}</h1>
    </main>   
  );
};