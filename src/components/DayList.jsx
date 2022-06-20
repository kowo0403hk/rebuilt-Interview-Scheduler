import React from "react";
import DayListItem from "./DayListItem";

export default function DayList({ days, value, onChange }) {
  // {days, value, onChange}

  const mappedItem = days.map((item) => {
    return (
      <DayListItem
        key={item.id}
        name={item.name}
        spots={item.spots}
        selected={item.name === value}
        setSelectedDay={onChange}
      />
    );
  });

  return <ul>{mappedItem}</ul>;
}
