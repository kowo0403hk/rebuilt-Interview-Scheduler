import React, { useEffect } from "react";
import "components/Appointment/style.scss";
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";

export default function Appointment({
  id,
  time,
  interview,
  interviewers,
  bookInterview,
  cancelInterview,
  onEdit,
}) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const EDIT = "EDIT";
  const CONFIRM = "CONFIRM";

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVE);
    bookInterview(id, interview).then(() => transition(SHOW)); //bookInterview returns a promise
  };

  const del = (name, interviewer) => {
    const interview = null;

    cancelInterview();
  };

  return (
    <article className="appointment">
      <Header time={time} />

      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={onEdit}
          onDelete={del}
        />
      )}
      {mode === EMPTY && <Empty onClick={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form interviewers={interviewers} save={save} onCancel={back} />
      )}
      {mode === SAVE && <Status>Saving...</Status>}
    </article>
  );
}
