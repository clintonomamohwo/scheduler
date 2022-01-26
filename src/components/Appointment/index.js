import React from "react";
import "components/Appointment/styles.scss";
import classNames from "classnames";
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";


export default function Appointment(props) {
  console.log(props);
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // let apptClasses = classNames("appointment", {});
  // console.log(apptClasses);

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);

    props.bookInterview(props.id, interview).then(() => transition(SHOW));
  }

  function destroy(event) {
    transition(DELETING);
    props.cancelInterview(props.id).then(() => transition(EMPTY));
  }


  return (
    <article>
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
       {mode === CREATE && (
        <Form interviewers={props.interviewers} onCancel={() => back()} onSave={save} />
      )}
      {mode === SAVING && <Status message="Saving" />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onCancel={back}
          onConfirm={destroy}
        />
      )}
    </article>
  );
}