<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class='popup'>
      <div class="popup__header">
        {{note.title}}
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button
          class="btn btn--left"
          @click="leftBtnAction(note)"
        >
          {{leftBtnTitle}}
        </button>
        <button
          class="btn btn--right"
          @click="closePopup"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popup",
    props: {
      note: {
        type: Object,
        default: function () {
          return {
            note: {
              title: '',
              id: '',
              todos: [],
            }
          }
        },
      },
      leftBtnTitle: {
        type: String,
        default: 'Ok'
      }
    },
    methods: {
      closePopup() {
        this.$emit('closePopup');
      },
      leftBtnAction() {
        this.$emit('leftBtnAction', this.note)
      },
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', function (item) {
        if (item.target === vm.$refs['popup_wrapper']) {
          vm.closePopup()
        }
      })
    },
  }
</script>

<style lang="scss">
  .popup_wrapper {
    background: rgba($color-blue, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .popup {
    padding: 1.6rem;
    position: fixed;
    top: 5rem;
    width: 40rem;
    border-radius: 0.5rem;
    background: $color-primary;
    z-index: 10;

    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__header {
      justify-content: center;
      font-weight: 700;
    }

    &__content {
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn {
      &--left, &--right {
        border-color: $color-primary-dark;
      }
    }

    .close_modal {
      padding: 8px;
      color: #ffffff;
      background: red;
    }
  }
</style>
