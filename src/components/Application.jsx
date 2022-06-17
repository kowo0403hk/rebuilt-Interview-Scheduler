import React, { useState, useEffect } from "react";
import axios from 'axios';


import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";

// test-data
import { appointments } from "./Appointment/appointment-data";


export default function Application(props) {
  const [day, setDay] = useState('Monday'); //to select specific day
  const [days, setDays] = useState([]); //to store days array data fetched from API

  useEffect(() => {
    axios.get('http://localhost:8001/api/days')
      .then(res => {
        setDays([...res.data])
      })
      .catch(e => console.log(e.response));
  }, []);

  const mappedAppointments = Object.values(appointments).map((appointment) => {
    return (
      //passing id, interview object and time
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
