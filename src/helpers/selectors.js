function getAppointmentsForDay(state, day) {
  const output = [];
  for (const elem of state.days) {
    if (elem.name === day) {
      for (const appt of elem.appointments) {
        if (state.appointments[appt]) {
          output.push(state.appointments[appt]);
        }
      }
    }
  }
  return output;
}

function getInterview(state, interview) {
  const output = {};
  if (interview) {
    output["student"] = interview.student;
    output["interviewer"] = state.interviewers[interview.interviewer];
  } else {
    return null;
  }
  return output;
}

function getInterviewersForDay(state, day) {
  const output = [];
  for (const elem of state.days) {
    if (elem.name === day) {
      for (const appt of elem.interviewers) {
        if (state.interviewers[appt]) {
          output.push(state.interviewers[appt]);
        }
      }
    }
  }
  return output;
}

export default getAppointmentsForDay;
export { getInterview, getInterviewersForDay };