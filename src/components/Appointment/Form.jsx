import React, { useState } from "react";
import PropTypes from "prop-types";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

function Form(props) {
  const [apptStudent, setApptStudent] = useState(props.student || "");
  const [apptInterviewer, setApptInterveiwer] = useState(
    props.interviewer || null
  );

  const reset = () => {
    setApptStudent("");
    setApptInterveiwer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          {/* student name input form */}
          <input
            type="text"
            className="appointment__create-input text--semi-bold"
            name="name"
            placeholder="Enter Student Name"
            // control component here
            value={apptStudent}
            onChange={(e) => setApptStudent(e.target.value)}
          />
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
          <Button
            confirm
            onClick={() => props.save(apptStudent, apptInterviewer)}
          >
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
  save: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Form;
