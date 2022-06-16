import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';

export default function Form(props) {
  // {student, interviewer(id), interviewers(object), onSave, onCancel}

  const [student, setStudent] = useState(props.student || '');
  const [interviewer, setInterveiwer] = useState(props.interviewer || null);

  const reset = () => {
    setStudent('');
    setInterveiwer(null);
  };

  const cancel = () => {
    reset();
    props.onCancel();
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete='off' onSubmit={(e) => e.preventDefault()}>
          {/* student name input form */}
          <input type="text" 
            className="appointment__create-input text--semi-bold"
            name='name'
            placeholder='Enter Student Name'
            // control component here
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </form>
        <InterviewerList 
          // code
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterveiwer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={props.onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
};
