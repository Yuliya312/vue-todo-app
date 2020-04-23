<template>
  <div class="app-home-layout">
    <div class="app-page">
      <section className="todoapp">
        <header className="header">
          <h1>todo Lists</h1>
          <!-- <NewTodo addTodo={this.addTodo} /> -->
        </header>
        <section className="main">
          <NotesList />
        </section>
        <!-- <TodosFilter
          filterButtonsChosed={filterButtonsChosed}
          todos={this.state.todos}
          filterHandler={this.filterHandler}
          onClearCompleted={this.clearAllCompleted}
        /> -->
      </section>
      <router-view />
    </div>
  </div>
</template>

<script>
  import NotesList from '@/components/NotesList';

  export default {
    name: 'main-layout',
    components: {
      NotesList,
    },
  }
</script>

<style lang="scss">
  header {
    background-color: $color-primary;
  }
</style>