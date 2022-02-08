// Helper functions for managing appointments and interviews.

export function getAppointmentsForDay(state, day) {
  const found = state.days.find((d) => day === d.name);

  if (state.days.length === 0 || !found) {
    return [];
  }
  return found.appointments.map((id) => state.appointments[id]);
}

export function getInterviewersForDay(state, day) {
  const found = state.days.find((d) => day === d.name);

  if (state.days.length === 0 || found === undefined) return [];

  return found.interviewers.map((id) => state.interviewers[id]);
}

export function getInterview(state, interview) {
  return (
    interview && {
      ...interview,
      interviewer: state.interviewers[interview.interviewer],
    }
  );
}
export const updateSpotsForDay = (appointments, days, dayId) => {
  try {
    const day = days.find((day) => day.id === dayId);
    day.spots = day.appointments.filter(
      (appointmentId) => !appointments[appointmentId].interview
    ).length;
  } catch (err) {
    return [];
  }
};
