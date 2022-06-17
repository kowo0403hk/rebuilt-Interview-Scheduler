import React, { useState, useEffect } from "react";
import axios from 'axios';


import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";

// test-data
import { appointments } from "./Appointment/appointment-data";


export default function Application(props) {
  // const [selectedDay, setSelectedDay] = useState('Monday'); //to select specific day
  // const [days, setDays] = useState([]); //to store days array data fetched from API

  const [state, setState] = useState({
    selectedDay: 'Monday',
    days: [],
    appointments: []
  });

  // set up specific setState functions
  const setSelectedDay = selectedDay => setState({...state, selectedDay});
  const setDays = days => setState(prev => ({...prev, days})); // has to include setState(prev =>....) because the dependancy array should be empty and setDay itself is referring to days' state INSIDE effect method. 

  useEffect(() => {
    axios.get('http://localhost:8001/api/days')
      .then(res => {
        setDays(res.data)
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
          <DayList days={state.days} value={state.selectedDay} onChange={setSelectedDay} />
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
