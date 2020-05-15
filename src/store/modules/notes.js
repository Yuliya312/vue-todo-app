export default {
  state: () => ({
    notes: JSON.parse(localStorage.getItem('notes') || '[]'),
    currentNoteId: '',
    // notes: [
    //   {
    //     title: 'First note',
    //     id: 1,
    //     todos: [
    //       {
    //         todoTitle: "bbb", todoId: "8s787782-f670-44d6-95c2-eacba1e85a66", completed: false,
    //       },
    //       {
    //         todoTitle: "aaa", todoId: "8fs8d662-f670-44d6-95c2-eacba1e85a66", completed: false,
    //       },
    //       {
    //         todoTitle: "ccc", todoId: "8fd8d711-f670-44d6-95c2-eacba1e85a66", completed: false,
    //       }
    //     ],
    //   },
  }),
  actions: {
    updateNotes({commit}, notes) {
      commit('setNotes', notes);
      localStorage.setItem('notes', JSON.stringify(notes));
    },
    updateCurrentNoteId({commit}, CurrentNoteId) {
      commit('setCurrentNoteId', CurrentNoteId);
      localStorage.setItem('CurrentNoteId', JSON.stringify(CurrentNoteId));
    },
    saveEditNote ({ commit }, payload) {
      commit('editNote', payload)
    }
  },
  mutations: {
    setNotes: (state, notes) => {
      state.notes = notes;
    },
    setCurrentNoteId: (state, currentNoteId) => {
      state.currentNoteId = currentNoteId;
    },
    editNote (state, payload) {
      console.log(payload);
      state.notes = state.notes.map(note => {
        if (note.id === payload.id) {
          return payload
        }

        return note
      })
    },
  },
  getters: {
    allNotes(state) {
      return state.notes
    },
    getCurrentNoteId(state) {
      return state.currentNoteId
    }
  }
}
