import React, { useState } from "react";
import PropTypes from "prop-types";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

function Form(props) {
  const [apptStudent, setApptStudent] = useState(props.student || "");
  const [apptInterviewer, setApptInterveiwer] = useState(
    props.interviewer || null
  );
  const [error, setError] = useState("");

  const reset = () => {
    setApptStudent("");
    setApptInterveiwer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  const validate = () => {
    if (apptStudent === "") {
      setError("Student Name cannot be blank");
      return;
    }

    if (!apptInterviewer) {
      setError("Please select an interviewer");
      return;
    }

    props.onSave(apptStudent, apptInterviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          {/* student name input form */}
          <input
            data-testid="student-name-input"
            type="text"
            className="appointment__create-input text--semi-bold"
            name="name"
            placeholder="Enter Student Name"
            // control component here
            value={apptStudent}
            onChange={(e) => setApptStudent(e.target.value)}
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList
          // code
          interviewers={props.interviewers}
          value={apptInterviewer}
          onChange={setApptInterveiwer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={validate}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}

Form.propTypes = {
  student: PropTypes.string,
  interviewer: PropTypes.number,
  interviewers: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Form;
