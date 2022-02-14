import React from "react";
import DayListItem from "components/DayListItem";


// React component for the list of days
export default function DayList(props) {
  const days = props.days;
  const DayList = days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={() => props.setDay(day.name)}
    />
  ));
  return <ul>{DayList}</ul>;
}
