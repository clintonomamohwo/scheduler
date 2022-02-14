import React from "react";

import useApplicationData from "../hooks/useApplicationData";

import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";

import "components/Application.scss";

import DayList from "components/DayList";
import Appointment from "components/Appointment";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  const interviewers = getInterviewersForDay(state, state.day);

  
  const appointments = getAppointmentsForDay(state, state.day)
  console.log("Appointments first",appointments)
  const Firstappointments = appointments.slice(0,appointments.length-2).map(
    (appointment) => {
      // console.log("Appointment",appointment);
      // console.log("interviewers",interviewers)
      return (
        <Appointment
          key={appointment.id}
          {...appointment}
          interview={getInterview(state, appointment.interview)}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview}
        />
      );
    }
  );
  const LastAppointment = appointments[appointments.length-1]
    const Lastinterview =LastAppointment ? getInterview(state, LastAppointment.interview) : null;
    console.log("Appointments",appointments)
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        <section className="schedule">
          {Firstappointments}
          <Appointment 
          key="Last"
          {...LastAppointment}
          interview={Lastinterview}
          interviewers={interviewers}
          bookInterview={bookInterview}
          cancelInterview={cancelInterview} 
          time="5pm"  />
        </section>
      </section>
    </main>
  );
}
