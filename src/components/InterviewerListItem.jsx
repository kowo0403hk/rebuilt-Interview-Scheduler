import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

function InterviewerListItem(props) {
  ///////////////////////////////////////////////////////////////////////////////////
  // setting up classNames for css styling
  //////////////////////////////////////////////////////////////////////////////////
  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });

  //setApptInterviewer will be triggered at leaf-node level and the exuection will be at the Form component. Once the state of ApptInterviewer changes, React will rerender with the updated state.
  return (
    <li onClick={props.setApptInterviewer} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}

InterviewerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  setApptInterviewer: PropTypes.func.isRequired,
};

export default InterviewerListItem;
