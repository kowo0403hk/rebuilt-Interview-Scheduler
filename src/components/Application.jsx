import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";

export default function Application() {
  // const [selectedDay, setSelectedDay] = useState('Monday'); //to select specific day
  // const [days, setDays] = useState([]); //to store days array data fetched from API

  const [state, setState] = useState({
    selectedDay: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  console.log(state.appointments);

  // set up specific setState functions
  const setSelectedDay = (selectedDay) => setState({ ...state, selectedDay });
  const setDays = (days) => setState((prev) => ({ ...prev, days })); // has to include setState(prev =>....) because the dependancy array should be empty and setDay itself is referring to days' state INSIDE effect method.
  // const setAppointments = appointments => setState(prev => ({...prev, appointments}));
  // const setInterviewers = interviewers => setState(prev => ({...prev, interviewers}));

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((e) => console.log(e));
  }, []);

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //return a promise so that we can do the transition after
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then((response) => {
        console.log(response.status, response);
        setState({
          ...state,
          appointments,
        });
      })
      .catch((e) => console.log(e.message));
  };

  const cancelInterview = (id, interview) => {
    console.log(id, interview);
  };

  const dailyAppointments = getAppointmentsForDay(state, state.selectedDay);

  const mappedAppointments = dailyAppointments.map((appointment) => {
    // setup an interview object with student name and interviewer information
    console.log("inside mappedAppointments", appointment.interview);
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.selectedDay);

    return (
      //passing id, interview object and time
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

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
          <DayList
            days={state.days}
            value={state.selectedDay}
            onChange={setSelectedDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {mappedAppointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
