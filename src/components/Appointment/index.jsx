import React, { useEffect } from "react";
import "components/Appointment/style.scss";
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

export default function Appointment({
  id,
  time,
  interview,
  interviewers,
  bookInterview,
  cancelInterview,
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

  const confirmDel = () => {
    transition(CONFIRM);
  };

  const del = (id) => {
    transition(DELETE);
    cancelInterview(id).then(() => transition(EMPTY));
  };

  const editAppt = () => {
    transition(EDIT);
  };

  return (
    <article className="appointment">
      <Header time={time} />

      {mode === SHOW && (
        <Show
          id={id}
          student={interview.student}
          interviewer={interview.interviewer}
          onEdit={editAppt}
          onDelete={confirmDel}
        />
      )}
      {mode === EMPTY && <Empty onClick={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form interviewers={interviewers} save={save} onCancel={back} />
      )}
      {mode === EDIT && (
        <Form
          student={interview.student}
          interviewer={interview.interviewer.id}
          interviewers={interviewers}
          save={save}
          onCancel={back}
        />
      )}
      {mode === SAVE && <Status>Saving...</Status>}
      {mode === DELETE && <Status>Deleting...</Status>}
      {mode === CONFIRM && (
        <Confirm id={id} onDelete={del}>
          Are you sure you want to delete this appointment?
        </Confirm>
      )}
    </article>
  );
}
