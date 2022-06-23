import { useState, useEffect } from "react";
import axios from "axios";

/////////////////////////////////////////////////////////////////////////////////////
// custom Hook for state object managhement used at the Application componenet level
////////////////////////////////////////////////////////////////////////////////////
export default function useApplicationData() {
  const [state, setState] = useState({
    selectedDay: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  ////////////////////////////////////////////////////////////////////////////////////////////
  // function to be used at this level by functions are are passed to other child components
  ///////////////////////////////////////////////////////////////////////////////////////////
  const updateSpots = (state, appointments) => {
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

  ///////////////////////////////////////////////////////////////////////////////////////
  // functions to be used by Application componenet and passed down to child compoenents
  //////////////////////////////////////////////////////////////////////////////////////
  const setSelectedDay = (selectedDay) => setState({ ...state, selectedDay });

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //return a promise so that we can do the transition after. We are not catching any error here because the Appointment component will deal with it. Also, catching error at this level will cause the error componenet not be rendered properly.
    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        const days = updateSpots(state, appointments);
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

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      const days = updateSpots(state, appointments);
      setState((prev) => ({
        ...prev,
        appointments,
        days,
      }));
    });
  };

  ///////////////////////////////////////////////////////////////////////////////////
  // API data fetching once the intial render is done
  //////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
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
