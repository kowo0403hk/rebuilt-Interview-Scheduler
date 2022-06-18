import React, {useEffect} from "react";
import 'components/Appointment/style.scss';
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";


export default function Appointment(props) {
  // {time, interview object, id}
  // {onEdit, onDelete, onAdd}
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const EDIT = 'EDIT';
  const CONFIRM = 'CONFIRM';

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);


  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={props.onEdit} onDelete={props.onDelete} />} 
      {mode === EMPTY && <Empty onClick={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={[]} onCancel={() => back()} />}
      
    </article>
  ); 
};