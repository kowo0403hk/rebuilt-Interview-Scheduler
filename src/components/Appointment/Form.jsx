import React, { useState } from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";

export default function Form({
  student,
  interviewer,
  interviewers,
  onSave,
  onCancel,
}) {
  const [apptStudent, setApptStudent] = useState(student || "");
  const [apptInterviewer, setApptInterveiwer] = useState(interviewer || null);

  const reset = () => {
    setApptStudent("");
    setApptInterveiwer(null);
  };

  const cancel = () => {
    reset();
    onCancel();
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
          interviewers={interviewers}
          value={apptInterviewer}
          onChange={setApptInterveiwer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>
            Cancel
          </Button>
          <Button confirm onClick={onSave}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
