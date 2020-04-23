<template>
  <section>
    <h2>Notes</h2>
    <div class="notes" v-for="note in allNotes" :key="note.id">
      <h3>{{note.title}}</h3>
      <p>{{note.body.todoTitle}}</p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'notes-list',
  computed: {
    ...mapGetters([
      'allNotes',
    ]),
  },
  methods: {
    ...mapActions([
      'updateNotes'
    ]),
  },
}
</script>