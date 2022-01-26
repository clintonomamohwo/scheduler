import React, { useState } from "react";
import "components/Appointment/styles.scss"; 
import Button from "components/Button"
import InterviewerList from "components/InterviewerList";


export default function Empty(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);


  const reset = () => {
    setName('')
    setInterviewer(null)
  }

  const cancel = () => {
    console.log('clicked')
    reset()
    props.onCancel()
  }
  return (
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
        <input
          className="appointment__create-input text--semi-bold"
          name="name"
          type="text"
          placeholder="Enter Student Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          /*
            This must be a controlled component
            your code goes here
          */
        />
      </form>
      <InterviewerList 
        /* your code goes here */
        interviewers={props.interviewers} 
        interviewer={interviewer} 
        onChange={setInterviewer}
      />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button danger onClick={props.onCancel}>Cancel</Button>
        <Button confirm onClick={()=>props.onSave(name,interviewer)}>Save</Button>
      </section>
    </section>
  </main>
 );
  }