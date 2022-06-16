import React, { useState } from "react";
import DayList from "./DayList";
import "components/Application.scss";
import Appointment from "./Appointment";

// test-data
import { appointments } from "./Appointment/appointment-data";
import { days } from "./days-data";


export default function Application(props) {
  const [day, setDay] = useState("Monday");

  const mappedAppointments = Object.values(appointments).map((appointment) => {
    return (
      <Appointment key={appointment.id} {...appointment} />
    );
  })

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
          <DayList days={days} value={day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {mappedAppointments}
      </section>
    </main>
  );
}
