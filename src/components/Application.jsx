import React, { useState, useEffect } from "react";
import axios from 'axios';


import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import { getAppointmentsForDay } from "helpers/selectors";


export default function Application(props) {
  // const [selectedDay, setSelectedDay] = useState('Monday'); //to select specific day
  // const [days, setDays] = useState([]); //to store days array data fetched from API

  const [state, setState] = useState({
    selectedDay: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.selectedDay);

  // set up specific setState functions
  const setSelectedDay = selectedDay => setState({...state, selectedDay});
  const setDays = days => setState(prev => ({...prev, days})); // has to include setState(prev =>....) because the dependancy array should be empty and setDay itself is referring to days' state INSIDE effect method. 
  // const setAppointments = appointments => setState(prev => ({...prev, appointments}));
  // const setInterviewers = interviewers => setState(prev => ({...prev, interviewers}));


  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then(all => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    }).catch(e => console.log(e));
  }, [])


  const mappedAppointments = dailyAppointments.map((appointment) => {
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
        <Appointment key='last' time="5pm" />
      </section>
    </main>
  );
}
