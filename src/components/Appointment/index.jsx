import React, {Fragment} from "react";
import 'components/Appointment/style.scss';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";


export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header time={props.time} />
      <Show onEdit={props.onEdit} onDelete={props.onDelete} />
      <Empty onAdd={props.onAdd} />
    </article>
  ); 
};