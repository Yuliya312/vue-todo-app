<template>
  <section 
    id="home-layout" 
    :class="[isScrolling && 'scrolled', 'home-layout']"
    :scroll="handleScroll"
  >
    <!-- <resize-observer @notify="handleResize" /> -->
    <header class="header">
      <h1 class="header__title">Notes list</h1>
    </header>
    <section class="main">
      <NewNote />
      <NotesList />
    </section>
  </section>
</template>

<script>
  import NewNote from '@/components/NewNote';
  import NotesList from '@/components/NotesList';

  export default {
    name: 'home',
    components: {
      NewNote,
      NotesList,
    },
    data() {
      return {
        isScrolling: false,
        scrollActive: false,
      };
    },
    created () {

    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(ev) {
        if (ev) {
          this.isScrolling = true;
        }
      },
      handleResize ({ width, height }) {
        console.log('resized', width, height)
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">
.home-layout {
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    rgba(#809DF2, 0.2),
    rgba(#040DBF, 0.3)),
    url('../assets/img/city.jpg');
  background-size: cover;
  background-position: top;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.home-layout.scrolled {
  height: 100%;
}

#app._scrolled {
  color: red;
}

.header {
  &__title {
    padding: 3rem;
    font-size: 3.6rem;
    text-align: center;
  }
}
</style>