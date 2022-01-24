import React, { useState } from "react";
import DayList from "./DayList";
import "components/Application.scss"; 
import Appointment from "components/Appointment";
import React, { Fragment, useState } from "react";
import axios from "axios";


const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];
// const days = [

//   {

//     id: 1,

//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];

export default function Application(props) {
  const [days, setDays] = useState([]);
  const [day, setDay] = useState("Monday");
  const [value, onChange] = useState(1)


  const appointmentItems = appointments.map((appointment, _index) =>
  <Appointment
    key={appointment.id}
    time={appointment.time}
    interview={appointment.interview}
  />
);

  useEffect(() => {
    Axios.get("/api/days")
    .then((res) => setDays(res.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */}
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
             <DayList days={days} day={day} setDay={setDay} />{" "}
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        {appointments.map(appointment => 
          <Appointment 
          key={appointment.id}
          {...appointment}
          />)}
          <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
