import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem({ name, spots, selected, setSelectedDay }) {
  // {name, spots, selected, setDay}

  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": !spots,
  });

  const formatSpots = () => {
    if (spots > 1) {
      return `${spots} spots remaining`;
    } else if (spots === 1) {
      return `${spots} spot remaining`;
    } else return "no spots remaining";
  };

  return (
    <li
      className={dayClass}
      onClick={() => setSelectedDay(name)}
      selected={selected}
    >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
