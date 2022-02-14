import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from "prop-types";

// React component that displays a list of interviewers
export default function InterviewerList(props) {
  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired,
  };

  console.log("Props",props);
  const interviewers = props.interviewers.map((interviewer) => {
    // console.log(interviewer);
    
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewers}</ul>
    </section>
  );
}
