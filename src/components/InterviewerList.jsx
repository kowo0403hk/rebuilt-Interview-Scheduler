import React from "react";
import PropTypes from "prop-types";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

function InterviewerList({ interviewers, value, onChange }) {
  ///////////////////////////////////////////////////////////////////////////////////
  // map incoming interviewers array to render individual interviewer on App
  //////////////////////////////////////////////////////////////////////////////////
  const mappedInterviewer = interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === value}
        setApptInterviewer={() => onChange(interviewer.id)}
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default InterviewerList;
