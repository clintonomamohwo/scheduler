import { useState, useEffect } from "react";

import axios from "axios";



export default function useApplicationData() {


 const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});

const setDay = day => setState({ ...state, day });

useEffect(() => {
  Promise.all([
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers")
  ]).then(
    ([{ data: days }, { data: appointments }, { data: interviewers }]) =>
      setState(prev => ({ ...prev, days, appointments, interviewers }))
  );
}, []);


function bookInterview(id, interview) {
  console.log(id, interview);
  return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    });
  });
}

function cancelInterview(id) {
  return axios.delete(`/api/appointments/${id}`).then(() => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    });
  });
}
return {
  state,
  setDay,
  bookInterview,
  cancelInterview
};

}