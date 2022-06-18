export function getAppointmentsForDay (state, day) {
  const filteredDay = state.days.filter( x => x.name === day);

  return !filteredDay[0] ? [] : filteredDay[0].appointments.map(id => state.appointments[id]);
};

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter( x => x.name === day);

  return !filteredDay[0] ? [] : filteredDay[0].interviewers.map(id => state.interviewers[id]);
}

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