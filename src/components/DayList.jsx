import React from "react";
import PropTypes from "prop-types";
import DayListItem from "./DayListItem";

function DayList(props) {
  ///////////////////////////////////////////////////////////////////////////////////
  // map incoming array of days to render Monday thru Friday correctly on App
  //////////////////////////////////////////////////////////////////////////////////
  const mappedItem = props.days.map((item) => {
    return (
      <DayListItem
        key={item.id}
        name={item.name}
        spots={item.spots}
        selected={item.name === props.value}
        setSelectedDay={props.onChange}
      />
    );
  });

  return <ul>{mappedItem}</ul>;
}

DayList.propTypes = {
  days: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DayList;
