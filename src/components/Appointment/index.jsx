import React from "react";
import PropTypes from "prop-types";
import "components/Appointment/style.scss";
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

function Appointment(props) {
  //////////////////////////////////////////////////////////////////////////////
  // constants for mode changing
  //////////////////////////////////////////////////////////////////////////////
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const EDIT = "EDIT";
  const CONFIRM = "CONFIRM";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  // state management for mode of display with customer hook functions
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  ///////////////////////////////////////////////////////////////////////////////////
  // functions to be passed down to child components and manage state at this level
  //////////////////////////////////////////////////////////////////////////////////
  const del = (id) => {
    transition(DELETE, true);
    props
      .cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch((e) => transition(ERROR_DELETE, true));
  };

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };

    transition(SAVE);
    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((e) => transition(ERROR_SAVE, true));
  };

  return (
    <article className="appointment">
      <Header time={props.time} />

      {mode === SHOW && (
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === EMPTY && <Empty onClick={() => transition(CREATE)} />}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onSave={save} onCancel={back} />
      )}
      {mode === EDIT && (
        <Form
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />
      )}
      {mode === SAVE && <Status>Saving...</Status>}
      {mode === DELETE && <Status>Deleting...</Status>}
      {mode === CONFIRM && (
        <Confirm id={props.id} onDelete={del} onCancel={back}>
          Are you sure you want to delete this appointment?
        </Confirm>
      )}
      {mode === ERROR_SAVE && (
        <Error onClose={back}>Could not save appointment</Error>
      )}
      {mode === ERROR_DELETE && (
        <Error onClose={back}>Could not cancel appointment</Error>
      )}
    </article>
  );
}

Appointment.propTypes = {
  id: PropTypes.number,
  time: PropTypes.string.isRequired,
  interview: PropTypes.object,
  interviewers: PropTypes.array,
  bookInterview: PropTypes.func,
  cancelInterview: PropTypes.func,
};

export default Appointment;
