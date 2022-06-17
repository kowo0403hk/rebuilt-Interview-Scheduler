export function getAppointmentsForDay (state, day) {
  const filteredDay = state.days.filter( x => x.name === day);

  if (!filteredDay[0]) {
    return [];
  } else {
    return filteredDay[0].appointments.map(id => state.appointments[id]);
  }
};