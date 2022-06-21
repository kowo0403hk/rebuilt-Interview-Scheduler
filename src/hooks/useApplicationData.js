import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    selectedDay: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setSelectedDay = (selectedDay) => setState({ ...state, selectedDay });

  const updatespots = (state, appointments) => {
    const newdays = state.days.map((day) => {
      let spots = 0;
      for (const appointmentID of day.appointments) {
        if (!appointments[appointmentID].interview) {
          spots++;
        }
      }
      return { ...day, spots };
    });
    return newdays;
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //return a promise so that we can do the transition after. We are not catching any error here because the Appointment component will deal with it.
    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then((response) => {
        console.log(response.status, response);
        const days = updatespots(state, appointments);
        setState((prev) => ({
          ...prev,
          appointments,
          days,
        }));
      });
  };

  const cancelInterview = (id) => {
    const interview = null;

    const appointment = {
      ...state.appointments[id],
      interview,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then((response) => {
        console.log(response.status, response);
        const days = updatespots(state, appointments);
        setState((prev) => ({
          ...prev,
          appointments,
          days,
        }));
      });
  };

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

  return { state, setSelectedDay, bookInterview, cancelInterview };
}
