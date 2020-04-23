export default {
  state: () => ({
    // notes: JSON.parse(localStorage.getItem('notes') || '[]'),
    notes: [
      {
        title: 'First note',
        id: 1,
        body: {
          todoTitle: "aaa", todoId: "8f5cd782-f670-44d6-95c2-eacba1e85a66", completed: false,
        }
      },
      {
        title: 'Second note',
        id: 2,
        body: {
          todoTitle: "bbb", todoId: "8f78d782-f670-44d6-95c2-eacba1e85a66", completed: false,
        }
      },
      {
        title: 'Third note',
        id: 3,
        body: {
          todoTitle: "ccc", todoId: "8f5cd711-f670-44d6-95c2-eacba1e85a66", completed: false,
        }
      },
    ],
    nextId: 1,
  }),
    SET_NOTES: (state, notes) => {
      state.notes = notes;
    },
  actions: {
    updateNotes({commit}, notes) {
      commit('setNotes', notes);
      // localStorage.setItem('notes', JSON.stringify(notes));
    },
  },
  mutations: {
    setNotes: (state, notes) => {
      state.notes = notes;
    },
  },
  getters: {
    allNotes(state) {
      return state.notes
    }
  }
}
