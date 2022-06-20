import React, { useEffect } from "react";
import "components/Appointment/style.scss";
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";

export default function Appointment({
  id,
  time,
  interview,
  bookInterview,
  onDelete,
  onEdit,
}) {
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };

    return interview;
  };
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const EDIT = "EDIT";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  return (
    <article className="appointment">
      <Header time={time} />

      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
      {mode === EMPTY && <Empty onClick={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form interviewers={[]} onSave={save} onCancel={back} />
      )}
    </article>
  );
}
