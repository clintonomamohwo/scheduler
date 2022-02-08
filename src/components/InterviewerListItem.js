import React from "react";
import classNames from "classnames";
import "components/InterviewerListItem.scss";


// React component that displays an interviewer avatar and name
export default function InterviwerListItem(props) {
  let interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li className={interviewClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
