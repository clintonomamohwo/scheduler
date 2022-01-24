import React, { Fragment } from 'react'
import "components/Appointment/styles.scss"; 
import classNames from "classnames";
import Header  from "./Header";
import Show    from "./Show";
import Empty   from "./Empty";

export default function Appointment(props) {
  console.log(props);
  
  let apptClasses = classNames("appointment", {
  });
  console.log(apptClasses)
  return (
    <article>
      <Header time={props.time} />
      {(
        props.interview
        ? <Show student={props.interview.student} interviewer={props.interview.interviewer} />
        : <Empty />
      )}
    </article>
  );
}


