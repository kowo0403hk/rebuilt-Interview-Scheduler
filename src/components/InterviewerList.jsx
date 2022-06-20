import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList({ interviewers, value, onChange }) {
  // {interviewers, value(interviewer_id), onChange}

  const mappedInterviewer = interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        // id={item.id} --> not needed because we are passing down a callback with this value in the setInterviewer key prop
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === value}
        setInterviewer={() => onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{mappedInterviewer}</ul>
    </section>
  );
}
