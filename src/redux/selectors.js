import { createSelector } from '@reduxjs/toolkit';

export const selectEvents = (state) => state.event.events;
export const selectLoading = (state) => state.event.loading;
export const selectParticipants = (state) => state.event.participants;
export const selectFilter = (state) => state.event.participantFilter;
export const selectTotalPages = (state) => state.event.totalPages;

export const selectFilteredParticipants = createSelector(
  [selectParticipants, selectFilter],
  (participants, inputFilter) => {
    return participants.filter((participant) =>
      participant.name.toLowerCase().includes(inputFilter.toLowerCase())
    );
  }
);
