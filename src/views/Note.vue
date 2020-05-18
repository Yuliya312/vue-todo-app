<template>
  <section
    id="note-layout"
    class="note-layout"
  >
    <div :scroll="handleScroll" :class="[isScrolling && 'scrolled', 'home-layout']">
      <div class="note-vue__empty" v-if="!note.title">
        <router-link to="/" class="btn">
          Home
        </router-link>
      </div>
      <div v-else class="note-vue">
        <h2 class="note-vue__title">Edit note</h2>
        <form 
          action=""
          class="note-vue__form form"
          @submit.prevent="saveEditNote" 
        >
          <input
            type="text"
            name="note"
            class="input form__input"
            v-model.trim="note.title"
          />
          <div class="form__buttons">
            <button class="btn form__btn">
              Save changes
            </button>
            <button
              type="button"
              class="btn form__btn"
              @click="cancel"
            >
              Cancel
            </button>
          </div>
        </form>
        <NewTodo :note="currentNote"/>
        <CurrentTodos 
          :currentNote="currentNote"
          @finishEditing="finishEditing(currentTodo = $event)"
          />
      </div>
    </div>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import NewTodo from '@/components/NewTodo';
  import CurrentTodos from '@/components/CurrentTodos';

  export default {
    name: 'note',
    components: {
      NewTodo,
      CurrentTodos,
    },
    data() {
      return {
        note: {
          title: this.currentNote.title,
          id: this.currentNote.id,
          todos: this.currentNote.todos,
        },
        currentTodo: '',
        isScrolling: false
      }
    },
    computed: {
      ...mapGetters([
        'allNotes',
        'currentNoteId'
      ]),
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    props: {
      currentNote: {
      type: Object,
        default: function () {
          return {
            note: {}
          }
        },
      }
    },
    methods: {
      ...mapActions([
        'updateNotes',
        'setCurrentNoteId'
      ]),
      cancel() {
        this.$router.push({ name: 'home' })
      },
      finishEditing(todo) {
        if (todo.todoTitle) {
          const updatedTodos = this.note.todos.map(task => {
            if (todo.id === task.id) {
              return {
                ...task,
                id: task.id,
                todoTitle: task.todoTitle,
                completed: task.completed,
              }
            }
            return task;
          });
          this.note.todos = updatedTodos;
        }
        localStorage.setItem('notes', JSON.stringify(this.allNotes));
      },
      handleScroll(ev) {
        this.isScrolling = true;
        console.log(this.isScrolling, ev)
      },
      saveEditNote () {
        if (!this.note.title) {
          return
        }
        const newNote = {
          id: this.note.id,
          title: this.note.title,
          todos: this.note.todos
        }
        this.$store.dispatch('saveEditNote', newNote);
        localStorage.setItem('notes', JSON.stringify(this.$store.getters.allNotes))
        this.$router.push({ name: 'home' })
      }
    },
  }
</script>

<style lang="scss">
  .wrapper {
    height: 100vh;
    background-image: linear-gradient(
      to right bottom,
      rgba($color-blue, 0.2),
      rgba($color-blue, 0.6)),
      url('../assets/img/city.jpg');
    background-size: cover;
    background-position: top;
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  .wrapper.scrolled {
    height: 100%;
  }

  .note-vue {
    max-width: 1080px;
    margin: 0 auto;

    &__empty {
      display: flex;
      justify-content: center;
      padding: 3rem;
    }

    &__title {
      padding: 3rem;
      font-size: 2.6rem;
      text-align: center;
    }

    .form {
      &__input {
        display: block;
        width: 80%;
        margin: 0 auto 3rem;
      }

      &__buttons {
        display: flex;
        justify-content: center;
        margin-bottom: 4rem;

        :not(:last-child) {
          margin-right: 2rem;
        }
      }
    }
  }
</style>