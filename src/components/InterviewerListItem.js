import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviwerListItem(props) {
  console.log("ILI: ", props)

  let interviewClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  })
  return (

<li className={interviewClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>)

}