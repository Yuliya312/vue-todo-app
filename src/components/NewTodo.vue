<template>
  <form 
    action=""
    class="new-todo__form form"
    @submit.prevent="addNewTodo(note)" 
  >
    <input
      type="text"
      name="new-todo"
      class="input new-todo__title"
      placeholder="Enter new todo please"
      v-model.trim="note.todos.todoTitle"
      v-focus
    />
    <div class="form__buttons">
      <button class="btn form__btn">
        Add new todo
      </button>
      <button
        type="button"
        class="btn form__btn"
        @click="clearTodoInput"
      >
        Clear
      </button>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'new-todo',
  computed: {
    ...mapGetters([
      'allNotes'
    ]),     
  },
  props: {
    note: {
    type: Object,
      default: function () {
        return {
          note: {
            title: '',
            id: '',
            todos: [
              {
                id: '',
                todoTitle: '',
                completed: false,
              }
            ],
          }
        }
      },
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    ...mapActions([
        'updateNotes'
      ]),
    addNewTodo(note) {
      if (note.todos.todoTitle) {
        note.todos.push(
          {
            id: uuidv4(),
            todoTitle: note.todos.todoTitle,
            completed: false,
          }
        )
        localStorage.setItem('notes', JSON.stringify(this.allNotes));
        note.todos.todoTitle = '';
        }
    },
    clearTodoInput() {
      this.note.todos.todoTitle="";
    }
  }
}

</script>

<style lang="scss">
  .new-todo {
    &__title {
      display: block;
      width: 80%;
      margin: 0 auto;
    }
  }
</style>