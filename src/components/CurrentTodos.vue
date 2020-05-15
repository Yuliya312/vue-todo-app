<template>
  <div>
    <ul class="todo-list">
      <li
        v-for="todo in note.todos" :key="todo.id"
        class="todo-list__item"
        :class="{ completed: todo.completed }"
      >
        <div>
          <input 
            class="todo-list__checkbox" 
            type="checkbox" 
            :checked="todo.completed"
            v-on:change="todo.completed = !todo.completed" 
          />
          <label 
            v-if="editTodoId !== todo.id"
            class="todo-list__title"
          >
            {{ todo.todoTitle }}
          </label>
          <input 
            v-else class="input todo-item__edit" 
            type="text" 
            v-model="todo.todoTitle"
            @blur="finishEditing" 
            @keyup.enter="finishEditing(todo)"
          >
        </div>
        <div>
          <button class="btn todo-list__btn" @click="editTodo(todo)">Edit</button>
          <button class="btn todo-list__btn" @click="deleteTodo(todo.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'current-todos',
  data() {
    return {
      note: {
        title: this.currentNote.title,
        id: this.currentNote.id,
        todos: this.currentNote.todos,
      },
      editTodoId: '',
    }
  },
  computed: {
    ...mapGetters([
      'allNotes',
    ]),
  },
  props: {
    currentNote: {
    type: Object,
      default: function () {
        return {
          note: {
            title: '',
            id: '',
            todos: [
              { 
                id: '',
                todoTitile: '',
                completed: false,
              }
            ],
          }
        }
      },
    }
  },
  methods: {
    ...mapActions([
      'updateNotes'
    ]),
    deleteTodo(id) {
      let updatedTodos = this.note.todos.filter(todo => {
        return id !== todo.id
      });
      this.note.todos = updatedTodos;
    },
    editTodo(todo) {
      this.$emit('editTodo', todo)
      this.editTodoId = todo.id
    },
    finishEditing(todo) {
      this.$emit('finishEditing', todo);
      this.editTodoId = ''
    }
  },
}
</script>

<style lang="scss">
  .todo-list {
    width: 100%;
    border-radius: 0.4rem;
    background-color: #EBECF0;
    padding: 1rem;

    &__item {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      background-color: #fff;
      margin: 1rem;
      padding: 1rem;
    }

    &__checkbox {
      min-width: 2rem;
      min-height: 2rem;
      margin: auto 2rem;
      line-height: 2rem;
      vertical-align: middle;
    }

    &__title {
      word-wrap: break-all;
    }

    &__btn {
      margin: 0 1rem;
      border-color: $color-primary-dark;
    }

    .completed {
      text-decoration: line-through;
      color: grey;
    }
  }
</style>