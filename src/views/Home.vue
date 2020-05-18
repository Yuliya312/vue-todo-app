<template>
  <section 
    id="home-layout" 
    :class="[isScrolling && 'scrolled', 'home-layout']"
    :scroll="handleScroll"
  >
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
      window.addEventListener('scroll', this.handleScroll);

            function get_scroll(a = 'Height') {
        var d = document,
            b = d.body,
            e = d.documentElement,
            c = "client" + a;
            a = "scroll" + a;
            console.log(/CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a]));
        return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])

      }
      console.log(get_scroll());

      get_scroll()
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(ev) {
        if (ev) {
          this.isScrolling = true;
        }
        if(window.scrollY > 0) {
          console.log(this.isScrolling, 'scroll')
        } 
        
        if(!ev) {
          console.log(this.isScrolling, 'unscroll')
        }
        // console.log(this.isScrolling);

      },
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
    rgba($color-blue, 0.2),
    rgba($color-blue, 0.6)),
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