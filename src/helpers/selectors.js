export function getAppointmentsForDay (state, day) {
  const filteredDay = state.days.filter( x => x.name === day);

  if (!filteredDay[0]) {
    return [];
  } else {
    return filteredDay[0].appointments.map(id => state.appointments[id]);
  }
};

export function getInterview(state, interview) {

  if (!interview) {
    return null;
  } else {
    const interviewerID = interview.interviewer;

    return {
      student: interview.student,
      interviewer: state.interviewers[interviewerID]
    };
  }
};