import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "components/DayListItem.scss";

function DayListItem(props) {
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots,
  });

  const formatSpots = () => {
    if (props.spots > 1) {
      return `${props.spots} spots remaining`;
    } else if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    } else return "no spots remaining";
  };

  return (
    <li
      className={dayClass}
      onClick={() => props.setSelectedDay(props.name)}
      selected={props.selected}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}

DayListItem.propTypes = {
  name: PropTypes.string.isRequired,
  spots: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  setSelectedDay: PropTypes.func.isRequired,
};

export default DayListItem;
