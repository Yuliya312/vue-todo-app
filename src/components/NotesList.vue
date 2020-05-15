<template>
  <section class="notes-section">
    <div class="notes">
      <div class="notes__note note" v-for="note in allNotes" :key="note.id">
        <div class="note__header">
          <h3 class="note__title">{{note.title}}</h3>
          <div class="note__buttons">
            <router-link 
              :to="{name: 'note', params: {currentNote: note}}">
              <button 
                class="btn note__btn" 
                aria-label="edit"
              >
                <span class="icon icon-edit"></span>
              </button>
            </router-link>
            <button 
              class="btn note__btn" 
              aria-label="delete"
              @click="showPopupInfo(note)"
            >
              <span class="icon icon-delete"></span>
            </button>
          </div>
        </div>
        <ul class="todos">
          <li class="todos__item" 
            v-for="todo of [...note.todos].splice(0, 3)" 
            :key="todo.id"
            :class="{ completed: todo.completed }"
          >
            {{todo.todoTitle}}
          </li>
        </ul>
      </div>
    </div>
    <div v-if="isInfoPopupVisible">
      <Popup
        @closePopup="closeInfoPopup"
        :note="currentNote"
        @leftBtnAction="deleteNote(currentNote = $event)"
      >
      <p>Do you want to delete current note?</p>
      </Popup>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Popup from '@/components/Popup';

export default {
  name: 'notes-list',
  components: {
    Popup,
  },
  data() {
    return {
      isInfoPopupVisible: false,
      currentNote: null,
      currentNoteId: '',
      newTodo: '',
    };
  },
  computed: {
    ...mapGetters([
      'allNotes',
    ]),
  },
  methods: {
    ...mapActions([
      'updateNotes'
    ]),
    closeInfoPopup() {
      this.isInfoPopupVisible = false;
    },
    deleteNote(currentNote) {
      this.updateNotes(this.allNotes.filter(note => currentNote.id !== note.id));
      this.isInfoPopupVisible = false;
    },
    showPopupInfo(note) {
      this.isInfoPopupVisible = true;
      this.currentNote = note;
      
    },
  }
}
</script>

<style lang="scss">
  .notes {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    &__note {
      margin: 0 auto 1rem;
    }

    &-section {
      max-width: 1080px;
      margin: 0 auto;
    }
  }

  .note {
    width: 90%;
    border-radius: 0.4rem;
    background-color: #EBECF0;
    padding: 1rem;

    &__header {
      display: flex;
      justify-content: space-between;
    }

    &__title {
      display: inline-block;
      padding: 0 0.4rem;
      word-wrap: break-word;
    }

    &__btn {
      height: 2rem;
      margin: 0;
      padding: 0;
    }
  }

  .todos {
    padding: 0.4rem 0;
    border-radius: 0.4rem;

    &__item {
      margin: 0.4rem;
      padding: 0.4rem 1rem;
      border-radius: 0.4rem;
      background-color: $color-white;
    }
  }

  .icon {
    display: block;
    width: 2rem;
    height: 2rem;
    background-size: 2rem;
    background-position: top;

    &-delete {
      background-image: url('../assets/img/rubbish-bin-delete-button.svg');
    }

    &-edit {
      background-image: url('../assets/img/pencil (1).svg');
    }
  }

  .completed {
    text-decoration: line-through;
    color: grey;
  }
</style>>