<template>
  <section className="todoapp">
    <header className="header">
      <h1 class="header__title">Notes list</h1>
    </header>
    <section className="main">
      <NewNote />
      <NotesList />
    </section>
  </section>
</template>

<script>
  import NewNote from '@/components/NewNote';
  import NotesList from '@/components/NotesList';

  export default {
    name: 'main-layout',
    components: {
      NewNote,
      NotesList,
    },
  }
</script>

<style lang="scss">
  .header {
    &__title {
      padding: 3rem;
      font-size: 3.6rem;
      text-align: center;
    }
  }
</style>