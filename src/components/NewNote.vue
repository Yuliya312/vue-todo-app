<template>
  <div class="new-note">
    <button class="btn btn__add-note" @click="showPopupInfo">New note</button>
    <div v-if="isInfoPopupVisible">
      <Popup
        leftBtnTitle="Add new note"
        @closePopup="closeInfoPopup"
        @leftBtnAction="addNewNote"
      >
        <form 
          action=""
          class="new-note__form"
          @submit.prevent="addNewNote" 
        >
          <input
            type="text"
            name="new-note"
            class="input new-note__title"
            placeholder="Enter new note please"
            v-model.trim="note.title"
          />
        </form>
      </Popup>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { v4 as uuidv4 } from 'uuid';
  import Popup from '@/components/Popup';

  export default {
    name: 'new-note',
    data() {
      return {
        isInfoPopupVisible: false,
        note: {
          id: '',
          title: '',
        },
      }
    },
    components: {
      Popup,
    },
    computed: {
      ...mapGetters([
        'allNotes'
      ]),     
    },
    methods: {
      ...mapActions([
        'updateNotes'
      ]),
      addNewNote() {
        if(this.note.title) {
        this.updateNotes([
          ...this.allNotes, {
            id: uuidv4(),
            title: this.note.title,
            todos: [],
          }
        ]);
        this.note.title = '';
        }
        this.isInfoPopupVisible = false;
      },
      clearInput() {
        this.note.title = '';
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
      showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
    },
  }
</script>

<style lang="scss">
  .new-note {
    &__title {
      margin-bottom: 0;
    }
  }

  .new-note__title.input {
    margin: 1.5rem 0;
  }

  .btn {
    &__add-note {
      display: block;
      margin: 0 auto 3rem;
    }
  }
</style>